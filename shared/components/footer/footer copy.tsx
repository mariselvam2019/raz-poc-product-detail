import { useState } from "react"
import Link from "next/link"
import { navLinks } from "../../constants"

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
    <div className="footer-main h-48 min-h-full grid lg:grid-cols-2 md:grid-cols-1 my-14">
      <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
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
          <div className="font-bold mb-8">Sign up for our newsletter</div>
          <div className="mb-2">The latest deals and savings, sent to your inbox weekly</div>
          <div className="flex space-x-6">
            <input type="text" className="w-full border-2 rounded-lg h-12"></input>
            <button type="button" className="w-28 bg-indigo-600 border text-white rounded-lg">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

