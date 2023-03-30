

import { Box, Typography, styled } from '@mui/material';
import  '../Component/Portlio.css';
import img1 from '../Assets/Images/p1.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Portlio = () => {
    return (
        <Header>
            <Typography variant="h4">Shubham Singh</Typography>
            <Box style={{display: 'flex'}}>
            <div>
                <nav class="navber background">
                    <div class="menu">
                        <u1 class="nav-list">
                            <li><a href="#book_box2"> Home</a></li>
                            <li><a href="#contact"> About</a></li>
                            <li><a href="#book_box2">Services</a></li>

                            <li><a href="#contact"> Contact</a></li>
                        </u1>
                    </div>
                    <div class="rightnav">
                        <input type="text" name="search" id="search" placeholder="Search.." />

                    </div>



                </nav>

                <section class="background2">
                    <div class="box-main">
                        <div class="firsthalf">
                            <div class="secondhalf">
                                <img src={img1} alt="kvj" />
                            </div>


                            <div class="detail">
                                <div class="kk">
                                    <h1>
                                    <p class="text small">Being a technology-enthusiast, I love exploring new technologies and leveraging them to solve real-life problems.I'm driven by the will to create an impact and encourage diversity and inclusion in communities.

                                        <p>I am Computer Engineering undergraduate at DSMNRU,lucknow. Certain skills that I have worked with include Data structure and Algorithm Cpp,Web Development. And what I might lack in skills I make up for with my determination to learn.</p>

                                        Outside of tech,I am a Green tea lover and have spent my college days exploring theatre and places.</p>
                               </h1> </div>

                            </div>
                        </div>
                    </div>
                </section>




                <section class="fortter" id="contact">

                    <div class="tag">

                        <div class="most_top">
                            <div class="para">
                            </div>

                        </div>

                        <div class="top">
                            <p>My name is Shubham Kumar</p>

                            <p> MERN Stack Developer|| |C++||DSA|| Student at DSMNRU </p>
                            <p>MACHINE LEARNING TO DEEP LEARNING -Mentored and Certified
                                by IIRS|ISRO Dehradun.Total course duration was =13hrs/30min</p>
                            <p>NASA ASTRONOMY OLYMPIAD TEST -Secure 7.4/10 rank and got
                                certificate by ORANGE Education Adding value to Perfection</p>
                            <p>C TUTORIALS COURSE -Grew knowledge or secured 46/46 marks
                                and collected certificate from Sololearn</p>
                            <p> BARCLAYS LIFE SKILLS PROGRAMME -Its a perfect stepping stone
                                for me in 3-4 days diversity training programme and stimulated by
                                certificate from GTT Foundation,Pune</p>
                        </div>



                        <div class="bottom">
                            <h3>Contact_Us</h3><hr />
                            <p><ion-icon name="home-outline"></ion-icon>Address: Teachers colony ,New delhi</p>
                            <p><ion-icon name="mail-outline"></ion-icon>Email-id: shubhamsinghnov02@gmail.com</p>
                            <p><ion-icon name="call-outline"></ion-icon>Mobile no.: +917060032636</p>
                            <p><ion-icon name="phone-outline"></ion-icon>Place:India </p>
                        </div>
                    </div>
                </section>


                <section id="contact" />
                <div class="container mt-3 contactContent" />
                <h1 class="text-center">Contact Me</h1>
                </div>
            </Box>
        </Header>
    )
}

export default Portlio;