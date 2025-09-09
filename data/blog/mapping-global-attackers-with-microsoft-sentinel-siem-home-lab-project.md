---
title: Mapping Global Attackers with Microsoft Sentinel (SIEM Home Lab Project)
date: 2025-05-15 18:53:00 Z
categories:
  - Blog
tags:
  - SIEM
  - Blue
  - Microsoft Sentinel
  - SOC
  - Log Analytics
  - Azure Security
  - KQL
image: /static/images/attack-map.jpg
math: false
draft: false
summary: In this project, I set up a SIEM home lab in Azure using Microsoft
  Sentinel to detect failed logins, enrich data with GeoIP, and visualize global
  brute-force attacks on a live map.
---
# 1. Introduction

Within the cybersecurity universe, it is essential for a Security Operations Center (SOC) analyst to understand how to collect, query, and enrich logs. In this lab, I built a Windows 10 **honeypot VM** in **Microsoft Azure**, deliberately exposed it to the internet to simulate a target for attackers. I then configured **Log Analytics Workspace (LAW)** and **Microsoft Sentinel* to ingest security logs in real-time. Using** Kusto Query Language (KQL)\*\*, I queried failed login attempts, enriched the logs with GeoIP data, and visualized attacker locations on a world map. 

This lab gave me hands-on experience with: 

* Setting up an Azure VM as a honeypot 
* Analysing Windows Event Viewer logs 
* Configuring Network Security Group (NSG) 
* Collecting logs with Log Analytics + Sentinel 
* Writing KQL (Kusto Query Language) queries 
* Enriching logs with GeoIP data - Visualising attacks on a global map

# 2. Lab Setup

### 2.1. Create Azure VM

First, create a Resource Group to organize and store all components of this project.

![](/static/images/resourcegroup.png)

Next, I created a Virtual Network (VNet) inside the Resource Group, which acts as the network backbone that the VM will connect to.

![](/static/images/virtualnetwork.png)

(Important: make sure to select the same Resource Group when creating the VNet.)

![](/static/images/creatingvirtualnet.png)

Finally, I deployed a Virtual Machine (Windows 10 Pro) inside the same Resource Group.

![](/static/images/creatingvm.png "Choose Windows 10 Pro image")

![](/static/images/creatingvm2.png)

![](/static/images/creatingvm3.png)



### 2.2. Configure Network Security Group (NSG)

Within the Resource Group, open NSG, and delete default RDP allow-any rule

![](/static/images/nsg1.png)



![](/static/images/nsg2.png)

Add new inbound rule: allow all traffic (source: Any, destination: Any, protocol: Any, port: Any)

![](/static/images/nsg3.png)

### 2.3. Disable Windows Firewall

At this point, using the VM's credentials, log in to the VM through Remote Desktop Connection, which can be found on our Windows local machine.

![](/static/images/rdp.png)



Open wf.msc → set Domain, Private, Public profiles to Off

![](/static/images/firewall.png)



# 3. Logging into the VM and inspecting logs

### 3.1. Testing network connectivity

Ping VM from local machine: ping ***VM Public IP*** to test connectivity 

![](/static/images/picture6.png)

The VM successfully replied to ICMP Echo Requests (ping), which means that the host is reachable and we can proceed to the next step (RDP login testing).

### 3.2. Testing RDP connectivity

RDP login attempts: create fake username `employee`, fail login 3–4 times

![](/static/images/picture7.png)

### 3.3. Inspecting the logs

Within the VM, open up Event Viewer, then Windows logs, and inspect the Security logs

![](/static/images/eventlog.png)



Then, use Search tools, or Filter to find the Event ID ***4625***, which indicates a failed logon attempt, or examine the logs for a little while to discover failed logon attempts.

![](/static/images/eventlog2.png)

![](/static/images/eventlog3.png)



# 4. Log Forwarding and KQL

### 4.1. Create Log Analytics Workspace (LAW)

First, create a Log Analytics Workspace to act as the database backend that stores and indexes all ingested logs. It also provides the engine to run KQL queries directly on the data.

![](/static/images/createlaw.png)

### 4.2. Create a Sentinel Instance and connect it to Log Analytics

Then, search for Microsoft Sentinel, and connect it with the LAW we previously created.

![](/static/images/sentinelinstance.png)

### 4.3. Configure the “Windows Security Events via Azure Monitor Agent (AMA)” connector

Within the Log Analytics connected to Sentinel, open Content Hub and search for Windows Security Events. 

![](/static/images/ama.png)

### 4.4. Create the Data Collection Rule (DCR) within Sentinel

Within Windows Security Events, search for Windows Security Events via AMA, and create a Data Collection Rule, which defines which logs the AMA should collect and forward. All resources in DCR should be chosen.

![](/static/images/dcr.png)



![](/static/images/dcr2.png)



Check Extensions + Applications in VM to make sure AzureMonitorWindowsAgent is there

![](/static/images/checkazureagent.png)

### 4.5. Verify log ingestion within LAW

Using KQL to check whether the Event ID (4625) exists in the logs:

```
SecurityEvent
| where EventID ==4625
| where TimeGenerated > ago(5m)
| project TimeGenerated, Account, Computer, EventID, Activity, IpAddress
```



Result: shows all failed login attempts in real time

![](/static/images/logsingestion.png)

# 5. GeoIP Enrichment

### 5.1. Prepare GeoIP watchlist

As we only IP addresses and no location data, we need to import a spreadsheet that contains geographic information for each block of IP addresses to be used as a watchlist in Microsoft Sentinel.

![](/static/images/spreadsheet.png)



![](/static/images/geo1.png)



![](/static/images/geo2.png)

I used a spreadsheet from this [link.](https://drive.google.com/file/d/13EfjM_4BohrmaxqXZLB5VUBIz2sv9Siz/view)[](https://drive.google.com/file/d/13EfjM_4BohrmaxqXZLB5VUBIz2sv9Siz/view)

### 5.2. Enrich SecurityEvent logs

Then, apply new KQL queries to utilise geographic information with IP addresses, and time to show where the attacks are coming from

```
let GeoIPDB_FULL = _GetWatchlist("geoip001")
let WindowsEvents = SecurityEvent
    | where IpAddress == <attacker IP  address>
    | where  EventID == 4625
    | order by TimeGenerated desc
    | evaluate ip4_lookup(GeoIPDB_FULL, IpAddress, network)
WindowsEvents
| project TimeGenerated, Account, IpAddress, cityname, countryname, latitude, longitude
```

This query filters Windows security logs with **EventID = 4625** (failed login) from the specified attacker IP, then sorts them in **descending order** by time. It uses **ipv4_lookup** to join with the **GeoIP watchlist** to enrich the data with geographic details based on the **IP** and **network**. Finally, it outputs a table showing the **timestamp** (TimeGenerated), the **attacked machine** (Computer), the **attacker’s IP**, and the corresponding **city**, **country**, **latitude**, and **longitude**.

![](/static/images/geokql.png)



# 6. Attack Map Visualization

### 6.1. Create Workbook

To be able to visualise our logs into a map, we need to create a workbook in the Threat Management section through Microsoft Sentinel.

![](/static/images/workbook.png)

![](/static/images/geoworkbooks.png)

### 6.2. Add Query visualization

Open a New query, and go to the Advanced Editor to input KQL. Using the Advanced Editor instead of the default panel allowed us to fully control both the query logic and the visualization in JSON. This let us enrich failed login events with GeoIP data, aggregate them by attacker location, and customize the map’s appearance – bubble size, heatmap colors, friendly labels, and legend. The result is a cleaner and more informative attack map than the default settings.

```
{
  "type": 3,
  "content": {
    "version": "KqlItem/1.0",
    "query": "let GeoIPDB_FULL = _GetWatchlist(\"geoip001\");\nlet WindowsEvents = SecurityEvent;\nWindowsEvents | where EventID == 4625\n| order by TimeGenerated desc\n| evaluate ipv4_lookup(GeoIPDB_FULL, IpAddress, network)\n| summarize FailureCount = count() by IpAddress, latitude, longitude, cityname, countryname\n| project FailureCount, AttackerIp = IpAddress, latitude, longitude, city = cityname, country = countryname,\nfriendly_location = strcat(cityname, \" (\", countryname, \")\");",
    "size": 3,
    "timeContext": {
      "durationMs": 2592000000
    },
    "queryType": 0,
    "resourceType": "microsoft.operationalinsights/workspaces",
    "visualization": "map",
    "mapSettings": {
      "locInfo": "LatLong",
      "locInfoColumn": "countryname",
      "latitude": "latitude",
      "longitude": "longitude",
      "sizeSettings": "FailureCount",
      "sizeAggregation": "Sum",
      "opacity": 0.8,
      "labelSettings": "friendly_location",
      "legendMetric": "FailureCount",
      "legendAggregation": "Sum",
      "itemColorSettings": {
        "nodeColorField": "FailureCount",
        "colorAggregation": "Sum",
        "type": "heatmap",
        "heatmapPalette": "greenRed"
      }
    }
  },
  "name": "query - 0"
}
```

![](/static/images/workbook2.png)

### 6.3. Configure filters & settings

I can clearly see the top attacker locations at this point. 

![](/static/images/attlocation.png)




I can also filter the color and configure the Layout settings for better visualisation. I chose the time range **last 30 days**.

![](/static/images/attlocation2.png)

# 7. Observations

Leaving the VM on for about 24 hours, I observed that there were more than **600 attacks** targeted RDP brute force until that point. Top attacker countries to consider are: France, Germany, and Indonesia.

With the Attack map, it is easy for us to track and observe patterns, and hotspots

![](/static/images/map.png)

# 8. Key Takeaways

* Exposing even a small VM online attracts immediate attacks
* SIEM tools (Sentinel + LAW) allow real-time log collection, enrichment, and visualization
* KQL is a crucial skill for threat detection and incident response
* GeoIP enrichment + map visualization help SOC analysts quickly identify attacker locations
