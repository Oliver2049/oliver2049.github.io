import FlippingLogo from './FlippingLogo'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div className="mt-20 mb-20 flex flex-col items-center">
        <FlippingLogo
          sizeClass="h-16 w-16"
          className="mb-3 grayscale hover:!grayscale-0 transition duration-300"
          href="#top"
          ariaLabel="Back to top"
        />
        <div className="hidden text-sm text-gray-700 md:flex">
          <div className="mx-1">{`Oliver Doan © ${currentYear}`}</div>
          {`•`}
          <div className="mx-1">Template by Viet Anh</div>
        </div>
      </div>
    </footer>
  )
}
