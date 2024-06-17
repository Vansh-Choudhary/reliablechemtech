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
  const [selectedProductCategory, setSelectedProductCategory] = useState('PVC STABILIZERS /ADDITIVES');
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
          <h2>Home</h2>
          <h2>About Us</h2>
          <h2>Products</h2>
          <h2>Contact</h2>

        </div>
        <Link href={'#contact'}>
        <button className='rounded-3xl font-times  text-white text-2xl p-2 px-5 my-5 bg-black'>
              Order now
        </button>
        </Link>
    </div>
    <ToastContainer />
    <div className="h-fit min-w-fit w-full pt-[6rem]" style={{ backgroundImage: "linear-gradient(45deg, #E7D2F6, white, #E1F3FB)" }}>
      <div className='lg:flex w-full sm:block  px-10 justify-around py-10 gap-y-10'>
        <h1 className="font-sans font-normal text-black text-6xl gradientHeading lg:w-[50vw]">Innovation and <span className='font-times font-bold italic'>Quality</span> in <span className='font-times font-bold italic'>Chemical</span> Solutions for all your needs</h1>
        <div className='min-w-[20rem]'>
          <h1 className="font-times italic font-bold text-black text-3xl w-[20rem] gradientHeading">Intrested in buying the Product?</h1>
          <button className='rounded-3xl font-mono font-bold text-black text-2xl p-2 px-5 my-5' style={{ backgroundImage: "linear-gradient(45deg, #C9FA6A, #8BE492)" }}>
              Inquire Now
          </button>
        </div>
      </div>

      <div className='lg:flex w-full sm:block  px-10 justify-around py-10'>
        <div className='lg:w-[50vw] lg:flex sm:block  '>
          
          <div className='min-w-[18rem] w-[18rem] p-7 rounded-3xl' style={{background: "linear-gradient(45deg, #D2DBE4, #F2F2F2)", boxShadow: '0 0 3rem rgb(153 153 153 / 50%)'}}>
            <div className='flex gap-4'>
              <div className='min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-white items-center flex justify-center'>
                <LuFlaskConical size={30}></LuFlaskConical>
              </div>
              <h2 className='font-mono font-bold text-2xl leading-6 mb-5'>Specialty Chemicals</h2>
            </div>
            <h3 className='font-times text-lg leading-5 italic'>Engineered for specific industrial apps, our specialty chemicals ensure superior performance & reliability.</h3>
          </div>

          <div className='min-w-[18rem] w-[18rem] p-7 rounded-3xl lg:-translate-x-[25px] lg:translate-y-[40px] translate-x-[35px] -translate-y-[20px]' style={{background: "linear-gradient(45deg, #D2DBE4, #F2F2F2)", boxShadow: '0 0 3rem rgb(153 153 153 / 50%)'}}>
            <div className='flex gap-4'>
              <div className='min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-white items-center flex justify-center'>
                <LuAtom size={30}></LuAtom>
              </div>
              <h2 className='font-mono font-bold text-2xl leading-6 mb-5'>Industrial Solvents</h2>
            </div>
            <h3 className='font-times text-lg leading-5 italic'>Versatile and efficient solvents for a wide range of industrial processes, ensuring optimal results.
            </h3>
          </div>
          
        </div>
        <div className='min-w-[20rem] flex flex-col justify-end lg:mt-0 mt-[5rem]'>
          <div className='flex py-5'>
            <img src='sampleperson1.png' className='rounded-full min-w-[4rem] min-h-[4rem] max-h-[4rem] max-w-[4rem] border-white border-2'/>
            <img src='sampleperson2.png' className='rounded-full min-w-[4rem] min-h-[4rem] max-h-[4rem] max-w-[4rem] border-white border-2 -translate-x-3'/>
            <img src='sampleperson1.png' className='rounded-full min-w-[4rem] min-h-[4rem] max-h-[4rem] max-w-[4rem] border-white border-2 -translate-x-6'/>

          </div>
          <h1 className="font-sans font-bold text-black text-5xl gradientHeading">2,200 +</h1>
          <h2 className="font-sans font-bold text-black text-3xl gradientHeading">Verified Customers</h2>
        </div>
      </div>

      <div className='bg-black min-h-fit mt-[3rem] pb-0 flex justify-start flex-col items-center px-[2rem]'>
        <img src='circleExplore.png'className='sticky -translate-y-[4rem] min-w-[6rem] min-h-[6rem] max-h-[6rem] max-w-[6rem]'/>
          <h2 className='font-sans text-gray-700 text-5xl'>Welcome to best service</h2>
          <h2 className='font-sans text-gray-100 text-7xl'>Reliable Chemtech</h2>
        <img src='circleExplore.png'className='sticky translate-y-[3rem] min-w-[6rem] min-h-[6rem] max-h-[6rem] max-w-[6rem]'/>
      </div>
      <div className='flex justify-center flex-wrap gap-10 items-center mt-[7rem] pb-[4rem]'>
          <div className='min-w-[18rem] w-[18rem] p-7 rounded-[3rem]' style={{background: 'linear-gradient(45deg, #303429, #3D5733)', color: 'white', boxShadow: '0 0 3rem rgb(153 153 153 / 50%)'}}>
            <div className='flex gap-4'>
              <div className='min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-white items-center flex justify-center'>
                <LuFingerprint size={30} color='black' />
              </div>
              <h2 className='font-mono font-bold text-2xl leading-6 mb-5'>Quality Assurance</h2>
            </div>
            <h3 className='font-times text-lg leading-5 italic'>We are dedicated to delivering high-quality chemical solutions, ensuring superior performance and reliability for all industrial applications.</h3>
          </div>

          <div className='min-w-[18rem] w-[18rem] p-7 rounded-[3rem]' style={{background: 'linear-gradient(45deg, #303429, #3D5733)', color: 'white', boxShadow: '0 0 3rem rgb(153 153 153 / 50%)'}}>
            <div className='flex gap-4'>
              <div className='min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-white items-center flex justify-center'>
                <LuPackageOpen size={30} color='black'></LuPackageOpen>
              </div>
              <h2 className='font-mono font-bold text-2xl leading-6 mb-5'>Wide Solutions</h2>
            </div>
            <h3 className='font-times text-lg leading-5 italic'>From PVC stabilizers to metallic stearates, our extensive product portfolio meets the diverse needs of various industries, providing comprehensive solutions.</h3>
          </div>

          <div className='min-w-[18rem] w-[18rem] p-7 rounded-[3rem]' style={{background: 'linear-gradient(45deg, #303429, #3D5733)', color: 'white', boxShadow: '0 0 3rem rgb(153 153 153 / 50%)'}}>
            <div className='flex gap-4'>
              <div className='min-w-[3rem] min-h-[3rem] max-h-[3rem] max-w-[3rem] rounded-full bg-white items-center flex justify-center'>
                <LuBadgeCheck size={30} color='black'></LuBadgeCheck >
              </div>
              <h2 className='font-mono font-bold text-2xl leading-6 mb-5'>Industry Expertise</h2>
            </div>
            <h3 className='font-times text-lg leading-5 italic'>With years of experience and a commitment to innovation, we are a trusted partner in the chemical manufacturing industry, offering expert support and services.</h3>
          </div>

      </div>

      <div className='bg-white rounded-[4rem] w-[100%] p-[2.5%] my-[5%] rounded-b-none' style={{boxShadow: '0 0 5rem rgb(153 153 153 / 50%)'}}>
        <div className='flex justify-between items-center flex-wrap '>
          <h2 className='font-sans gradientHeading text-3xl flex gap-5 my-7'> <span><LuGalleryVertical className='hidden lg:block' size={30}/> </span> Our Top Quality Products</h2>
          <div className='flex p-2 g-x-2 bg-slate-100 w-fit rounded-lg items-center h-[2.5rem]  '>
            <input 
              className='bg-transparent font-times text-xl focus:outline-none' placeholder='Search Products' 
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              />
            <LuSearch size={20} /> 
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='arrowButton' onClick={scrollLeft}><LuArrowLeftCircle size={30} /></div>
          <div ref={containerRef} className='w-[92vw] overflow-y-hidden overflow-x-scroll h-[4rem] px-2 gap-5 bg-white flex justify-start items-center   '>
          {categories.map((category, index) => (
            <h4 key={index}
            className={`productItem ${selectedProductCategory === category ? 'productItemSelected' : ''}`}
            onClick={() => handleCategoryClick(category)}
            >{category}</h4>
          ))}
          </div>

          <div className='arrowButton' onClick={scrollRight}><LuArrowRightCircle size={30}/></div>
        </div>


      
        <div>
          {selectedProductCategory && (
              <div className='flex flex-wrap gap-5 justify-center items-center p-10'>
                  {filteredProducts.map((product, index) => (
                      <div key={index} className='productCard'>
                          <LuFlaskConical className='text-gray-200 my-5' size={50}/>
                          <h4 className='text-2xl'>{product["PRODUCT NAME"]}</h4>

                          <p className='font-times'><strong>Origin/Make:</strong> {product["ORIGIN/MAKE"]}</p>
                          <div className='flex gap-x-3 items-center flex-wrap my-3'>
                            <p className='font-times text-md h-fit leading-5 my-1 bg-gray-200 w-fit p-1 px-2 rounded-md text-gray-500'>{product["GRADE"]}</p>
                            <p className='font-times text-md leading-5 my-1 bg-gray-200 w-fit p-1 px-2 rounded-md text-gray-500'>{product["PRODUCT FORM"]} FORM</p>
                          </div>
                          <Link href={'#contact'}>
                          <button onClick={()=>{setSelectedProduct(product["PRODUCT NAME"])}} className='rounded-3xl font-times  text-white text-2xl p-2 px-5 my-5 bg-black'>
                                {selectedProduct !== product["PRODUCT NAME"] ?"Inquire Now ":'Selected'}
                          </button>
                          </Link>
                          {/* <p className='font-times italic text-md leading-5'> {product["APPLICATIONS"]}</p> */}
                      </div>
                  ))}
              </div>
          )}
          </div>


      </div>

      <div name="contact" className='flex h-fit min-w-[90vw] gap-[4rem] px-[5vw] justify-around bg-black rounded-[4rem] m-[4vw]'>
        <img src='flask.png' className='h-fill object-contain w-[20rem] scale-125 -translate-y-5 hidden lg:block'>
        </img>
        <div className='py-10 block'>
          <h1 className='font-sans  text-5xl gradientHeadingWhite'>Contact Us</h1>
          <h1 className="font-times font-bold text-black text-3xl gradientHeadingWhite mb">Inquire about a Product?</h1>


          <select
              className='bg-white p-2 rounded-3xl my-5 block font-times min-w-[22rem]'
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
          <div className='flex px-4 my-3 min-w-[21.5rem] mb-1 g-x-2 bg-slate-100 w-fit rounded-3xl justify-between items-center h-[2.5rem]  '>
            <input 
              className='bg-transparent font-times  text-xl focus:outline-none placeholder-black' placeholder='Enter Name' 
              type="text"
              value={inputName} onChange={(e)=>setinputName(e.target.value)}
              />
            <LuUser2 size={20} /> 
          </div>
          <div className='flex px-4 my-3 min-w-[21.5rem] mb-1 g-x-2 bg-slate-100 w-fit rounded-3xl justify-between items-center h-[2.5rem]  '>
            <input 
              className='bg-transparent font-times  text-xl focus:outline-none placeholder-black' placeholder='Enter Email' 
              type="text"
              value={inputEmail} onChange={(e)=>setinputEmail(e.target.value)}
              />
            <LuMail size={20} /> 
          </div>
          <textarea value={inputMessage} onChange={(e)=>setinputMessage(e.target.value)} className='min-w-[21.5rem] font-times py-2 px-5 rounded-3xl mt-5 placeholder-black text-xl' placeholder='Enter Message'>
          </textarea>
          <button className='rounded-3xl font-times  text-black text-2xl p-2 px-5 my-5 bg-white block' onClick={()=>submitForm()}>Submit Form</button>

        </div>
      </div>

      <div>
        
        <div className='flex items-center justify-between w-[90vw] m-[4vw] my-10 flex-wrap'>
          <h1 className='font-sans  text-5xl gradientHeading'>
          What our Customer Says about us
          </h1>
          <button className='rounded-3xl font-mono font-bold text-black text-3xl p-4 px-10 my-5' style={{ backgroundImage: "linear-gradient(45deg, #C9FA6A, #8BE492)" }}>
                FeedBack
          </button>
        </div>
        
        <div className='flex justify-around flex-wrap bg-white rounded-3xl min-w-[90vw] mx-[4vw] p-10'>
        <div className='max-w-[23rem] min-w-[19rem]  rounded-lg'>
          <img src='quote.png'/>
          <h2 className='font-times italic leading-5 my-5'>Reliable Chemtech consistently delivers top-notch chemical solutions. Their innovative products have significantly improved our processes, and their customer service is exceptional. Highly recommended!</h2>      
          <hr/>
          <h1 className='my-2 font-mono text-lg font-bold'>Jane Smith, Production Manager</h1>
        </div>



        <div className='max-w-[23rem] min-w-[19rem]  rounded-lg'>
          <img src='quote.png'/>
          <h2 className='font-times italic leading-5 my-5'>We've seen remarkable improvements in product quality and efficiency since partnering with Reliable Chemtech. Their cutting-edge solutions and responsive team make them a standout choice in the industry.</h2>      
          <hr/>
          <h1 className='my-2 font-mono text-lg font-bold'>Mark Johnson, Head Manf.</h1>
        </div>

        <div className='max-w-[23rem] min-w-[19rem]  rounded-lg'>
          <img src='quote.png'/>
          <h2 className='font-times italic leading-5 my-5'>Reliable Chemtech's commitment to innovation and quality is outstanding. Their products have greatly enhanced our operations, and their support team is always helpful. Truly a reliable partner!</h2>      
          <hr/>
          <h1 className='my-2 font-mono text-lg font-bold'>Emily Davis, Quality Control</h1>
        </div>
        </div>

      </div>
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
