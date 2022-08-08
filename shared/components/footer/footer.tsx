import { useState } from "react"
import Link from "next/link"
import { navLinks } from "../../constants/footer"

type FooterNavLinks = {
  id: Number,
  title: String
}

type Props = {
  items?: Array<FooterNavLinks>
}


function Footer({ items }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="footer-main h-48 min-h-full grid grid-cols-2 my-14">
      <div className="grid grid-cols-4">
        <div className="text-center">
          <Link href='/shop/t-shirt/french-connection-men-black-printed-slim-fit-pure-cotton-t-shirt'>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>
        <div className="text-left">
          <div className="font-bold">Products</div>
          {navLinks.products.map(product => {
            return <div className="my-8">{product.title}</div>
          })}        
        </div>
        <div className="text-left">
          <div className="font-bold">Company</div>
          {navLinks.company.map(company => {
            return <div className="my-8">{company.title}</div>
          })}        
        </div>
        <div className="text-left">
          <div className="font-bold">Customer service</div>
          {navLinks.customer_service.map(service => {
            return <div className="my-8">{service.title}</div>
          })}        
        </div>
      </div>
      <div className="grid">
        <div>
          <div className="font-bold">Sign up for our newsletter</div>
          <div>The latest deals and savings, sent to your inbox weekly</div>
          <div className="flex">
            <input type="text"></input>
            <button type="button" className="mt-6 w-9 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

