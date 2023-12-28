import React, { useState } from "react";
import styled from "styled-components";
import Front from '../pages/front'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import "./about.css"
export default function About() {
  const [activeItem, setActiveItem] = useState(1);
  const data = [
    {
      id: 1,
      url: "https://media.istockphoto.com/id/1127905341/photo/dancing-in-virtual-reality-glasses.jpg?s=612x612&w=0&k=20&c=EBWgxDE65sdghdvBhwr050Kbts2ZD4tUaO6Gu1dEvCM=",
      name: "Innovative",
    
    
    },
    {
      id: 2,
      url: "https://miro.medium.com/v2/resize:fit:1200/1*ywh0Zdlwrrhp_tdJMCjJ7A.jpeg",
      name: "Results Driven",
      
      
    },
    {
      id: 3,
      url: "https://cybr.com/wp-content/uploads/2020/06/insecure-communication.jpg",
      name: "Dynamic",
      
      
    },
    {
      id: 4,
      url: "https://img.freepik.com/premium-photo/boy-using-futuristic-computer_135749-58.jpg",
      name: "Tech savvy",
      
      
    },
    {
      id: 5,
      url:"https://media.licdn.com/dms/image/C5612AQHupEb3wTC5Nw/article-cover_image-shrink_720_1280/0/1629132932403?e=2147483647&v=beta&t=Szo-4uCBd7_6TZqrNPlLl48_bjqsj6_wMD3Jb_L6Nlg",
      name: "Customer Focused",
      
      
    },
  ];

  const handleHover = (id) => {
    if (activeItem === id) {
      return;
    }
    setActiveItem(id);
  };

  const handleHoverRemove = () => {
    if (activeItem === 1) {
      return;
    }
    setActiveItem(1);
  };
  return (
    <div className="about-page">
        <Front />
      <h1>About US</h1>
      <div className="ab-content">
        <p id="pleft" className='pp'>
        Welcome to Digital Dreams, where innovation meets results! Our journey began with a simple yet profound idea to empower businesses with the tools and strategies needed to thrive in the dynamic world of digital marketing.

        At the core of Digital Dreams is a commitment to empower businesses of all sizes. Whether you're a startup seeking to establish your digital presence or an established enterprise aiming to enhance your online reach, we are dedicated to providing comprehensive solutions tailored to your unique needs.
        </p>
      
        <div>
        <img id="abimage"src="ab.jpg" alt="process"></img>
        </div>
      </div>

      <div id="ideas">
                <div id="title">
                  <h1>Result Driven<br></br> <span id="span">DIGITAL BRANDING</span></h1>
                </div>
                <div id="whole">
                  <div className="sec" id="sec-1">
                      <p>Logo Design</p>
                      <p>Brand Identity Design</p>
                      <p>Packaging Design</p>
                      <p>Print Design</p>
                      <p>Brand Strategy</p>
                      <p>Outdoor Design</p>
                  </div>
                  <div className="sec" id="sec-2">
                      <p>SEO</p>
                      <p>SEM</p>
                      <p>Social Media Strategy</p>
                      <p>Social Media Marketing</p>
                      <p>Content Strategy</p>
                  </div>
                  <div className="sec" id="sec-3">
                      <p>Website Design</p>
                      <p>ECommerce</p>
                      <p>SEM</p>
                      <p>UI/UX Design</p>
                      <p>UX Consulting</p>
                  </div>
                  </div>
      </div>
      <AppContainer>
      <Wrapper>
        <ContentWrapper>
          <Left>
            <TextWrapper>
              <p style={{color:"White"}}>Core Values</p>
            </TextWrapper>
           
          </Left>
          <Right>
            {data.map((i) => (
              <ItemWrapper
                key={i.id}
                onMouseOver={() => handleHover(i.id)}
                onMouseLeave={() => handleHoverRemove()}
                isActive={i.id === activeItem}
              >
                <Item className="Itemmm"
                  style={{
                    backgroundImage: `url(${i.url})`,
                  }}
                  isActive={i.id === activeItem}
                >
                  <DetailsWrapper
                    isFirst={i.id === 1}
                    isActive={i.id === activeItem}
                  >
                    <h1>{i.name}</h1>
                    {/* <TopicListWrapper>
                      <p>{i.topicList}</p>
                      <span>Topics</span>
                    </TopicListWrapper> */}
                  </DetailsWrapper>
                  {/* <VerticalDetailsWrapper
                    isFirst={i.id === 1}
                    isActive={i.id === activeItem}
                  >
                    <p>{i.shortName}</p>
                  </VerticalDetailsWrapper> */}
                </Item>
              </ItemWrapper>
            ))}
          </Right>
        </ContentWrapper>
      </Wrapper>
    </AppContainer>

        <h1>
          Our Mission
        </h1>
      <div className="mission">
        <img id="miss" src="miss.jpg" alt="Mission"></img>
        <p  className='pp'>
        At Digital Dreams, we are on a mission to transform the way businesses connect with their audience online. We believe in the power of digital marketing to not just promote products or services but to build lasting relationships with customers. Our goal is to provide cutting-edge solutions that elevate your brand and drive measurable results.
        We measure our achievements by the milestones you reach. From boosting brand visibility to driving conversions, we celebrate each success story as a testament to the collaborative journey we embark on with our clients.
        </p>
      </div>
      
        <h1>Digital Dreams Difference</h1>
      <div className='digdiff'>
        
        <p id="pleft"  className='pp'>
        What sets Digital Dreams apart is our commitment to innovation, data-driven strategies, and a customer-centric approach. We understand that each business is unique, and there's no one-size-fits-all solution. That's why we tailor our digital marketing services to align with your specific goals and challenges.
        Choosing Digital Dreams means choosing a partner committed to your growth. We bring together innovation, data-driven insights, and a customer-centric ethos to redefine the possibilities within digital marketing. Your success story is unique, and so is our approach to helping you tell it.
        </p>
        <img  id="diff" src="newUp.jpg" alt="dig"></img>
      </div>
      <h1 id="ff">Key Features</h1>
      <div className='corevalue'>
        
            <div className='key'>
              <h2>Innovation</h2>
              <p  className='pp'>In the fast-paced world of digital marketing, staying ahead of the curve is crucial. We foster a culture of innovation, constantly exploring new technologies and strategies to keep your brand at the forefront of the digital landscape.</p>
            </div>
          
            <div className='key'>
             <h2>Transparency</h2>
             <p  className='pp'>We believe in transparency in all our dealings. From the strategies we implement to the results we achieve, you can trust Digital Dreams to be open and honest every step of the way.</p>
            </div>
         
            <div className='key'>
              <h2>Collabration</h2>
              <p  className='pp'>Your success is our success. We view our clients as partners and work collaboratively to achieve shared goals. Through open communication and teamwork, we build strong and lasting relationships.</p>
            </div>
        
            <div className='key'>
              <h2>Result-Driven</h2>
              <p  className='pp'>Our focus is on delivering tangible results. Whether it's increasing website traffic, boosting conversion rates, or enhancing brand visibility, we are dedicated to driving the outcomes that matter most to your business.</p>
            </div>
          
          
      </div>
      <div className='divider'>
        
      </div>
      <div className='getting'>
        <h1>Getting Started With DigitalDreams</h1>
        <p id="get"  className='pp'>
        Ready to take your digital marketing to new heights? Contact us today to discuss your goals and discover how Digital Dreams can be the catalyst for your online success. Join countless businesses that have already experienced the transformative power of our digital marketing solutions.

        Thank you for considering Digital Dreams as your partner in the digital realm. We look forward to helping you achieve and exceed your marketing objectives. Dream big with Digital Dreams!
        </p>
  

      </div>
      <div id="hft" >
        <div >
          <h2 style={{color:"white",fontWeight:"900"}}>About Us</h2>
          <p >
          Fueling digital dreams with a sprinkle of creativity and a dash of strategy, DigitalDreams is not your average marketing team—we're the storytellers, trendsetters, and magic-makers in the digital realm
          </p>
        </div>

       
        <div>
          <h2 style={{color:"white",fontWeight:"900"}}>Contact Us</h2>
          <p >
            Email: info@example.com
            <br/>
            Phone: +1 123 456 7890
          </p>
        </div>

        <div >
          <h2  style={{color:"white",fontWeight:"900"}}>Follow Us</h2>
          <div className="social-icons">
            <div>
            <a href="https://www.facebook.com" target="_blank" >
              <FaFacebook  className='ic'/>
            </a>
            </div>
            <div>

            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter  className='ic'/>
            </a>
            </div>
            <div>
              
            <a href="https://www.linkedin.com" target="_blank">
              <FaLinkedin className='ic'/>
            </a>
            </div>
            <div>

            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram className='ic'/>
            </a>
            </div>
          </div>
        </div>

      
        </div>

    </div>
  )
}


const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfbfb;
`;
const Wrapper = styled.div`
  width: 1200px;
  @media screen and (max-width: 480px) {
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    gap: 20px;
  }
`;

const Left = styled.div`
  position: relative;
  @media screen and (max-width: 280px) {
    height: 310px;  
    padding: 0 10px;
  }
`;

const TextWrapper = styled.div`
  line-height: 80px;
  font-size: 80px;
  margin-top: 90px;
p{
    
    
    color:#001f3f;
    background-color:#F1C812;
    font-size:80px;
    height:170px;
    width:230px;
  }
  h2 {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    line-height: 40px;
    font-size: 40px;
  }
`;


const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 900px;
  max-width: 1500px;
  width: calc(100% - 100px);
  height: 600px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    overflow-x: auto;
    min-width: auto;
    max-width: 100vw;
    width: calc(100vw - 1px);
    height: 320px;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    min-width: 290px;
  }
`;
const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  bottom:0px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto ${({ isActive }) => (isActive ? "120%" : "100%")};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    display: block;
    height: 50%;
    width: 100%;
    left: 0;
    
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }
`;

const DetailsWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px;
  padding-left: ${({ isFirst }) => (isFirst ? "30px" : "30px")};
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "2" : "0")};
  h1 {
    font-size: 20px;
    color:white;
    font-weight: 800;
    word-break: keep-all;
    height: 100%;
    width: 15vw;
    background-color:black;
  }

  @media screen and (max-width: 280px) {
    padding: 0 10px;
    bottom: 0px;
    padding-left: ${({ isFirst }) => (isFirst ? "10px" : "10px")};
    opacity: ${({ isActive }) => (isActive ? "1" : "1")};
    p {
      font-size: 25px;
    }
  }
`;
// const TopicListWrapper = styled.div`
//   text-align: center;
//   color: #fff;
//   p {
//     font-size: 52px;
//     line-height: 1;
//   }
//   span {
//     text-transform: uppercase;
//   }
//   @media screen and (max-width: 480px) {
//     p {
//       font-size: 20px;
//       line-height: 1;
//     }
//     span {
//       font-size: 12px;
//     }
//   }
// `;
// const VerticalDetailsWrapper = styled.div`
//   width: 120px;
//   height: 220px;
//   background-color: #1e1e2f;
//   position: absolute;
//   bottom: 60px;
//   z-index: 1;
//   left: 0;
//   transition: all 0.6s ease;
//   p {
//     font-size: 34px;
//     transform: rotate(-90deg);
//     color: #fff;
//   }
//   opacity: ${({ isActive }) => (isActive ? "0" : "1")};
//   display: ${({ isFirst }) => (isFirst ? "none" : "block")};

//   @media screen and (max-width: 480px) {
//     display: none;
//   }
// `;
