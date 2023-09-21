import React from 'react'
import Link from 'next/link'
import {BsTwitter} from 'react-icons/bs'
import {TfiInstagram} from 'react-icons/tfi'
import {BsLinkedin} from 'react-icons/bs'
import {LuFacebook} from 'react-icons/lu'





const Footer = () => {
  return (
    <>
     <footer className="footer">
        <div className="containers">
        <div className="row">
            <div className="footer-col">
                <h4>Company</h4>
                <ul className="items">
                    <li><Link href="">About Us</Link></li>
                    <li><Link href="">Privacy Policy</Link></li>
                    <li><Link href="">Our Services</Link></li>
                    <li><Link href="">Affiliate Program</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Get Help</h4>
                <ul className="items">
                    <li><Link href="">Faqs</Link></li>
                    <li><Link href="">Shipping</Link></li>
                    <li><Link href="">Returns</Link></li>
                    <li><Link href="">Order-Status</Link></li>
                    <li><Link href="">Payment Options</Link></li>

                </ul>
            </div>
            <div className="footer-col">
                <h4>Online Shop</h4>
                <ul className="items">
                    <li><Link href="">Watch</Link></li>
                    <li><Link href="">Blog</Link></li>
                    <li><Link href="">Shoes</Link></li>
                    <li><Link href="">Dresses</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Follow Us</h4>
                    <div className="icons">
                        <Link href=""><BsTwitter/></Link>
                        <Link href=""><TfiInstagram/></Link>
                        <Link href=""><BsLinkedin/></Link>
                        <Link href=""><LuFacebook/></Link>
                    </div>
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer