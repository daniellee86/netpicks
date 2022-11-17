import styled from "styled-components"
import Categories from "../components/Categories"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import {mobile, tablet} from "../responsive"
import { motion } from "framer-motion"

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 75%;
`
const InfoTop = styled.h1`
font-size: 70px;
color: white;
      letter-spacing: 6px;
margin: 0;
${mobile({ fontSize: "40px" })}
`

const Desc = styled.p`
font-size: 30px;
${mobile({ fontSize: "15px" })}
`

const InfoBottom = styled.h2`
font-size: 25px;
text-align: center;
color: white;
background-color: red;
border-radius: 10px;
padding:12px 50px;
margin-top: 15px;
${mobile({ display: "none" })}
${tablet({ display: "none" })}
`

const Home = () => {
  return (
    <>
    <div className="placeHolder">
    <Info>
      <motion.div
         initial={{ opacity: 0, y: 15 }}
         transition={{ ease: "easeInOut", delay: 2.0,  duration: 0.5 }} 
         whileInView={{ opacity: 1, y: 0}} 
         viewport={{ once: true }} 
      ><InfoTop>Discover your future favourites.</InfoTop>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        transition={{ ease: "easeInOut", delay: 2.25,  duration: 0.5 }} 
        whileInView={{ opacity: 1, y: 0}} 
        viewport={{ once: true }}
      >
       <Desc>Explore the latest releases at Netpicks.<br/> Create watchlists for you and your loved ones.<br/> Join the discussion and leave a review.</Desc>
      </motion.div>
      <motion.div
       initial={{ opacity: 0, y: 15 }}
       transition={{ ease: "easeInOut", delay: 2.5,  duration: 0.5 }} 
       whileInView={{ opacity: 1, y: 0}} 
       viewport={{ once: true }} 
      >
       <InfoBottom>Discover</InfoBottom>
      </motion.div>
      
    </Info>
    </div>

    <Categories/>
    <Newsletter/>  
    <Footer/>
    </>
  )
}

export default Home