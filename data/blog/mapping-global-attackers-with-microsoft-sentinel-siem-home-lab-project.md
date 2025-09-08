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

### 2.1. Step 1: Create Azure VM

* OS: Windows 10 Pro
* Size: Standard B1s (low-cost test lab)

  ![dasdas](/static/images/screenshot-2025-09-08-181853.png "asdasdas")
