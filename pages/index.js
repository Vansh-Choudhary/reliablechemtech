import React, { useRef, useState } from 'react';
import ProductData from './product.json';
import { LuArrowLeftCircle, LuArrowRightCircle, LuAtom, LuBadgeCheck, LuFingerprint, LuFlaskConical, LuGalleryVertical, LuLinkedin, LuMail, LuMoveLeft, LuMoveRight, LuPackageOpen, LuPhoneCall, LuSearch, LuTwitter, LuUser2 } from "react-icons/lu";
import Link from 'next/link';
import dotenv from 'dotenv';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

dotenv.config(); 
emailjs.init({publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY});

export default function Homepage() {
  const [selectedProductCategory, setSelectedProductCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [inputName, setinputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputMessage, setinputMessage] = useState("");

  const submitForm = async() => {
    var templateParams = {
      from_name: inputName,
      message: inputMessage,
      reply_to: "testuser2",
      product_name: selectedProduct,
      email: inputEmail,
    };

    if (!inputName || !inputEmail || !inputMessage || !selectedProduct) {
      // toast();
     toast('Please fill all the fields', { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light" });
      return;
    }
    // toast('Sending...');
  

    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast('Sent the Email', { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light" });
        setinputEmail("");
        setinputName("");
        setinputMessage("");
      },
      (error) => {
        toast('Error Sending Email', { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light" });
        console.log('ERROR!', error);

      },
    );
  };


  
  const getUniqueCategories = (data) => {
    const categories = data.map(item => item["CATEGORY OF PRODUCT"]);
    return [...new Set(categories)];
  }
  const categories = getUniqueCategories(ProductData);
  const containerRef = useRef(null);

  const scrollLeft = () => {
      if (containerRef.current) {
          containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
  };

  const scrollRight = () => {
      if (containerRef.current) {
          containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }
  const handleCategoryClick = (category) => {
    setSelectedProductCategory(category);
    
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleProductSelect = (event) => {
    setSelectedProduct(event.target.value);
};
const filteredProducts = ProductData.filter(product =>
    product["CATEGORY OF PRODUCT"] === selectedProductCategory &&
    product["PRODUCT NAME"].toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <>
    <Head>
      <title>Reliable Chemtech</title>
      <link rel="icon" href="logo.png" />
    </Head>
    <div className='Navbar'>
        <img src='logo.png' style={{width:'3rem'}}/>
        <div className='NavbarLink'>
          <Link href={'#home'}>
          <h2>Home</h2>
          </Link>
          <Link href={'#about'}>
          <h2>About Us</h2>
          </Link>
          <Link href={'#products'}>
          <h2>Products</h2>
          </Link>
          <Link href={'#contactus'}>
          <h2>Contact</h2>
          </Link>
        </div>
        <Link href={'#contact'}>
        <button className='rounded-3xl font-coolvetica  text-black text-2xl p-2 px-5 my-5 bg-white'>
              Contact Us
        </button>
        </Link>
    </div>
    <ToastContainer />
    <div name='home' className="h-fit min-w-fit w-full pt-[5rem]" style={{ backgroundImage: "linear-gradient(45deg, #E7D2F6, white, #E1F3FB)" }}>
      <div  style={{background:'url(/bg1.jpeg)'}} className='overflow-hidden relative bg-black min-h-fit mt-[0rem] py-[11rem] flex justify-start flex-col items-center px-[2rem]'>
          <div  style={{background: 'rgba(20,20,20,0.6'}} className='absolute top-0 left-0 w-full -z-1 h-full'/>
          <h2 className='font-sans text-gray-100 text-7xl text-center z-[2]'>WELCOME TO</h2>
          <h2 className='font-sans text-gray-100 text-7xl text-center z-[2]'>RELIABLE CHEMTECH</h2>
          <h2 className='font-coolvetica text-gray-100 text-3xl z-[2] text-center my-2'>Leading chemical suppliers for PVC, EVA & Rubber industries</h2>
          <Link className='z-[2]' href={'#contact'}>
          <button style={{background: '#3498db', color: 'white', borderRadius: '1rem'}} className=' font-coolvetica  text-black text-3xl p-2 px-5 my-5  bg-yellow-300'>
                Contact Us
          </button>
          </Link>
      </div>



  {/* BENIFITS SECTION */}
  <div>
    <h1 className="text-5xl w-full text-center mt-[5rem]">Benifits</h1>
    <div className="h-[0.5rem] w-[12rem] mx-auto my-2 rounded-full bg-blue-400"></div>
  </div>

  <div className="flex justify-center flex-wrap gap-10 items-center mt-[3rem] pb-[4rem]">
    <div
      className="min-w-[20rem] w-[20rem] p-7 py-7 rounded-[0rem]"
      style={{
        background: "#ffffff",
        color: "black",
        boxShadow: "0 0 3rem rgb(153 153 153 / 50%)",
      }}
    >
      <img
        src="quality.jpeg"
        className="w-full h-[10rem] scale-110 pb-5 object-cover "
        alt="background"
      />
      <div className="flex gap-4">
        <div className="min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-gray-100 items-center flex justify-center">
          <LuFingerprint size={30} color="black" />
        </div>
        <h2 className="font-coolvetica text-2xl leading-6 mb-5">
          Full-Quality Assurance
        </h2>
      </div>
      <h3 className="font-coolvetica text-lg leading-5">
        Highlight the company's commitment to high standards and certifications.
      </h3>
    </div>

    <div
      className="min-w-[20rem] w-[20rem] p-7 py-7 rounded-[0rem]"
      style={{
        background: "#ffffff",
        color: "black",
        boxShadow: "0 0 3rem rgb(153 153 153 / 50%)",
      }}
    >
      <img
        src="innovative.webp"
        className="w-full h-[10rem] scale-110 pb-5 object-cover "
        alt="background"
      />
      <div className="flex gap-4">
        <div className="min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-gray-100 items-center flex justify-center">
          <LuPackageOpen size={30} color="black" />
        </div>
        <h2 className="font-coolvetica text-2xl  leading-6 mb-5">
          Innovative Solutions
        </h2>
      </div>
      <h3 className="font-coolvetica text-lg leading-5">
        Emphasize the company's focus on innovative and sustainable chemical
        solutions.
      </h3>
    </div>

    <div
      className="min-w-[20rem] w-[20rem] p-7 py-7 rounded-[0rem]"
      style={{
        background: "#ffffff",
        color: "black",
        boxShadow: "0 0 3rem rgb(153 153 153 / 50%)",
      }}
    >
      <img
        src="carton.jpg"
        className="w-full h-[10rem] scale-110 pb-5 object-cover "
        alt="background"
      />
      <div className="flex gap-4">
        <div className="min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-gray-100 items-center flex justify-center">
          <LuBadgeCheck size={30} color="black" />
        </div>
        <h2 className="font-coolvetica text-2xl leading-6 mb-5">
          Comprehensive Product Range
        </h2>
      </div>
      <h3 className="font-coolvetica text-lg leading-5">
        Showcase the extensive range of products available to meet diverse
        industry needs.
      </h3>
    </div>
  </div>


  {/* ABOUT US SECTION */}


  <div name='about' style={{background:'url(/about.webp)'}} className='overflow-hidden relative bg-black min-h-fit mt-[0rem] py-[11rem] flex justify-start flex-col items-center px-[2rem]'>
      <div  style={{background: 'rgba(20,20,20,0.6'}} className='absolute top-0 left-0 w-full -z-1 h-full'/>
      <div className='z-[2]'>
        <h1 className="text-5xl w-full text-center mt-[5rem] text-white">About Us</h1>
        <div className="h-[0.5rem] w-[12rem] mx-auto my-2 rounded-full bg-blue-400"></div>
      </div>
      <h2 className='font-coolvetica text-gray-100 text-3xl z-[2] font-normal text-center my-2 w-[70vw]'>
        Reliable Chemtech is a trading company based in India, importing a
        wide range of high-grade industrial chemicals. We deliver a wide gamut of applications
        across sectors.
        <br/><br/>
        We are a well-established importer, exporter, and supplier of a wide range of specialty
        chemicals, PVC additives, metallic stearates, lubricants, fillers, impact modifiers,
        resin, polymers, aluminum foils, solvents, chemicals, and inks.
        </h2>

  </div>





{/* PRODUCT SECTION */}
<div>
  <h1 className="text-5xl w-full text-center mt-[5rem]">PRODUCTS</h1>
  <div className="h-[0.5rem] w-[12rem] mx-auto my-2 rounded-full bg-blue-400"></div>
  <p className="font-coolvetica  text-2xl h-fit mx-[5vw] mt-[1rem]  text-gray-500 text-center leading-5 w-[90vw]">Click the Product Category to see all its products</p>

</div>

      <div name='products' className=' w-[100%] p-[2.5%] my-[2rem] rounded-b-none'>
          {/* <div className='flex p-2 g-x-2 bg-slate-100 w-fit rounded-lg items-center h-[2.5rem]  '>
            <input 
              className='bg-transparent font-coolvetica text-xl focus:outline-none' placeholder='Search Products' 
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              />
            <LuSearch size={20} /> 
          </div> */}
        <div className='flex justify-center items-center'>
          <div ref={containerRef} className='w-[98vw] h-fit px-2 gap-5  flex justify-center items-center flex-wrap'>
          {categories.map((category, index) => (
            <Link href={'#selectedProduct'}>
            <h4 key={index}
            className={`productItem ${selectedProductCategory === category ? 'productItemSelected' : ''}`}
            onClick={() => handleCategoryClick(category)}
            >{category}</h4>
            </Link>
          ))}
          </div>
        </div>


      



    </div>

{/* SELECTED PRODUCT SECTION */}
{selectedProductCategory && (
<div name='selectedProduct'>
  <h1 className="text-5xl w-full text-center pt-[6rem]">{selectedProductCategory}</h1>
  <div className="h-[0.5rem] w-[12rem] mx-auto my-2 rounded-full bg-blue-400"></div>
</div>
  
)}

<div>
  {selectedProductCategory && (
    <div className="flex flex-wrap gap-5 justify-center items-center p-10">
      {filteredProducts.map((product, index) => (
        <div key={index} className="productCard">
          {/* <LuFlaskConical className='text-gray-200 my-5' size={50}/> */}
          <h4 className="text-2xl">{product["PRODUCT NAME"]}</h4>

          {/* <p className='font-coolvetica'><strong>Origin/Make:</strong> {product["ORIGIN/MAKE"]}</p> */}
          <div className="flex gap-x-3 items-center flex-wrap my-3">
            <p className="font-coolvetica text-md h-fit leading-5 my-1 bg-gray-200 w-fit p-1 px-2 rounded-md text-gray-500">
              {product["GRADE"]}
            </p>
            <p className="font-coolvetica text-md leading-5 my-1 bg-gray-200 w-fit p-1 px-2 rounded-md text-gray-500">
              {product["PRODUCT FORM"]} FORM
            </p>
          </div>
          <Link href={"#contact"}>
            <button
              onClick={() => {
                setSelectedProduct(product["PRODUCT NAME"]);
              }}
              className="rounded-3xl font-coolvetica  text-white text-2xl p-2 px-5 my-5 bg-black"
            >
              {selectedProduct !== product["PRODUCT NAME"]
                ? "Inquire Now "
                : "Selected"}
            </button>
          </Link>
          {/* <p className='font-coolvetica italic text-md leading-5'> {product["APPLICATIONS"]}</p> */}
        </div>
      ))}
    </div>
  )}
</div>;



{/* CONTACT SECTION */}
{/* <div>
  <h1 className="text-5xl w-full text-center mt-[3rem]">Contact Us</h1>
  <div className="h-[0.5rem] w-[12rem] mx-auto my-2 rounded-full bg-blue-400"></div>
  {/* <p className="font-coolvetica  text-2xl h-fit mt-[1rem]  text-gray-500 text-center leading-5 w-FULL">Click the Product Category to see all its products</p> */}

{/* </div>  */}
<div name="contactus" className='flex h-fit min-w-[98vw] gap-[1rem] px-[0vw] justify-between flex-wrap bg-black my-[4vw]'>

  <div className='py-10 px-20 flex flex-1 flex-col  text-white'>
  <h1 className='font-sans text-5xl gradientHeadingWhite'>Contact Us</h1>
  <h1 className="font-coolvetica text-black text-3xl gradientHeadingWhite mb">Let's Connect</h1>
  <div className="mt-8">
    <p className="text-lg font-coolvetica">
      <span className='text-2xl text-gray-500'>Phone</span><br/> +91 9999028806, +91 9873123800
    </p>
    <p className="text-lg font-coolvetica mt-[0.3rem]">
      <span className='text-2xl text-gray-500'>Email</span><br/> info@reliablechemtech.com, sales@reliablechemtech.com
    </p>
    <p className="text-lg font-coolvetica mt-[0.3rem]">
      <span className='text-2xl text-gray-500'>Address</span><br/> 875, Swarn Park, Mundka, New Delhi - 110041, near Metro Pillar No. 497.
    </p>
    <p className="text-lg font-coolvetica mt-[0.3rem]">
      <span className='text-2xl text-gray-500'>Business Hours</span><br/> 9 AM to 7 PM, Monday to Saturday (Sunday: Closed)
    </p>
  </div>
  <div className='flex gap-4 mt-[2rem] text-white'>
    <LuLinkedin size={30}/>
    <LuTwitter size={30}/>
    <LuPhoneCall size={30}/>
  </div>
</div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56003.88603804155!2d76.96467876434323!3d28.68238041421378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c4409e4423%3A0x4bd0e5139d400c25!2sSwarn%20Park!5e0!3m2!1sen!2sin!4v1718832443534!5m2!1sen!2sin" style={{ height: '34rem', flex:'1.5'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

{/* INQUIRE SECTION */}
<div>
  <h1 className="text-5xl w-full text-center mt-[3rem]">Inquire Us</h1>
  <div className="h-[0.5rem] w-[12rem] mx-auto my-2 rounded-full bg-blue-400"></div>
  {/* <p className="font-coolvetica  text-2xl h-fit mt-[1rem]  text-gray-500 text-center leading-5 w-FULL">Click the Product Category to see all its products</p> */}

</div>



<div name="contact" style={{background: 'white', width: 'fit-content', margin: '2rem auto', padding: '3rem', color: 'black', border: '1px solid gray'}}>

  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56003.88603804155!2d76.96467876434323!3d28.68238041421378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c4409e4423%3A0x4bd0e5139d400c25!2sSwarn%20Park!5e0!3m2!1sen!2sin!4v1718832443534!5m2!1sen!2sin" style={{translate: '-3rem', height: '33rem', flex:'1'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  <div >
    <h1 className='font-sans  text-5xl gradientHeading'></h1>
    <h1 className="font-coolvetica text-black text-3xl gradientHeading">Inquire about a Product?</h1>


    <select
        className='bg-white p-2 my-5 block font-coolvetica min-w-[22rem]'
        value={selectedProduct}
        onChange={handleProductSelect}
    >
        <option value="" disabled>Select a product</option>
        {ProductData.map((product, index) => (
          <option key={index} value={product["PRODUCT NAME"]}>
                {product["PRODUCT NAME"]}
            </option>
        ))}
    </select>
    <div className='flex px-4 my-3 min-w-[21.5rem] mb-1 g-x-2 bg-slate-100 w-fit justify-between items-center h-[2.5rem]  '>
      <input 
        className='bg-transparent font-coolvetica  text-xl focus:outline-none placeholder-black' placeholder='Enter Name' 
        type="text"
        value={inputName} onChange={(e)=>setinputName(e.target.value)}
        />
      <LuUser2 size={20} /> 
    </div>
    <div className='flex px-4 my-3 min-w-[21.5rem] mb-1 g-x-2 bg-slate-100 w-fit justify-between items-center h-[2.5rem]  '>
      <input 
        className='bg-transparent font-coolvetica  text-xl focus:outline-none placeholder-black' placeholder='Enter Email' 
        type="text"
        value={inputEmail} onChange={(e)=>setinputEmail(e.target.value)}
        />
      <LuMail size={20} /> 
    </div>
    <textarea value={inputMessage} onChange={(e)=>setinputMessage(e.target.value)} className='min-w-[21.5rem] font-coolvetica py-2 px-5  border-gray-400 border-2 mt-5 placeholder-black text-xl' placeholder='Enter Message'>
    </textarea>
    <button className='rounded-3xl font-coolvetica  text-white text-2xl p-2 px-5 my-5 bg-black block' onClick={()=>submitForm()}>Submit Form</button>

  </div>
</div>




{/* 

      <div>
        
        <div className='flex items-center justify-between w-[90vw] m-[4vw] my-10 flex-wrap'>
          <h1 className='font-sans  text-5xl gradientHeading'>
          What our Customer Says about us
          </h1>
          <button className='rounded-3xl font-coolvetica text-black text-3xl p-4 px-10 my-5' style={{ backgroundImage: "linear-gradient(45deg, #C9FA6A, #8BE492)" }}>
                FeedBack
          </button>
        </div>
        
        <div className='flex justify-around flex-wrap bg-white rounded-3xl min-w-[90vw] mx-[4vw] p-10'>
        <div className='max-w-[23rem] min-w-[19rem]  rounded-lg'>
          <img src='quote.png'/>
          <h2 className='font-coolvetica italic leading-5 my-5'>Reliable Chemtech consistently delivers top-notch chemical solutions. Their innovative products have significantly improved our processes, and their customer service is exceptional. Highly recommended!</h2>      
          <hr/>
          <h1 className='my-2 font-coolvetica text-lg font-bold'>Jane Smith, Production Manager</h1>
        </div>



        <div className='max-w-[23rem] min-w-[19rem]  rounded-lg'>
          <img src='quote.png'/>
          <h2 className='font-coolvetica italic leading-5 my-5'>We've seen remarkable improvements in product quality and efficiency since partnering with Reliable Chemtech. Their cutting-edge solutions and responsive team make them a standout choice in the industry.</h2>      
          <hr/>
          <h1 className='my-2 font-coolvetica text-lg font-bold'>Mark Johnson, Head Manf.</h1>
        </div>

        <div className='max-w-[23rem] min-w-[19rem]  rounded-lg'>
          <img src='quote.png'/>
          <h2 className='font-coolvetica italic leading-5 my-5'>Reliable Chemtech's commitment to innovation and quality is outstanding. Their products have greatly enhanced our operations, and their support team is always helpful. Truly a reliable partner!</h2>      
          <hr/>
          <h1 className='my-2 font-coolvetica text-lg font-bold'>Emily Davis, Quality Control</h1>
        </div>
        </div>

      </div> */}


<footer className='bg-black mt-10 px-10 flex flex-wrap justify-between py-5 items-center'>
  <h1 className='font-sans  text-2xl gradientHeadingWhite text-center'> Reliable Chemtech</h1>
  <div className='flex gap-4 text-white'>
    <LuLinkedin size={20}/>
    <LuTwitter size={20}/>
    <LuPhoneCall size={20}/>
  </div>
</footer>
</div>
    </>
  );
}
