import React, { Component } from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo, SectionThree, SectionFour, FormFive, FlexBoxIndex, GenereicPara, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faHtml5, faJs, faReact, faCss3, faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"
import * as qs from "query-string"

library.add(faHeart, faCode, faGem, fab, fas);

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
    }

    handleSubmit(event) {
        // Do not submit form via HTTP, since we're doing that via XHR request.
        event.preventDefault()
        // Loop through this component's refs (the fields) and add them to the
        // formData object. What we're left with is an object of key-value pairs
        // that represent the form data we want to send to Netlify.
        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

        // Set options for axios. The URL we're submitting to
        // (this.props.location.pathname) is the current page.
        const axiosOptions = {
          url: this.props.location.pathname,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData),
        }

        // Submit to Netlify. Upon success, set the feedback message and clear all
        // the fields within the form. Upon failure, keep the fields as they are,
        // but set the feedback message to show the error state.
        axios(axiosOptions)
          .then(response => {
            this.setState({
              feedbackMsg: "Form submitted successfully!",
            })
            this.domRef.current.reset()
          })
          .catch(err =>
            this.setState({
              feedbackMsg: "Form could not be submitted.",
            })
          )
      }

      render() {
          return (
            <Layout>
                <section style={{ position: 'relative' }}>
                    <Banner></Banner>
                    <TextWrapper>
                        <div>
                            <h2>GeekyHacker</h2>
                            <GenereicPara>One Stop For<br />
                                All your development<br />
                                And design needs</GenereicPara>
                            <Link to="/works">Our Work</Link>
                        </div>
                    </TextWrapper>
                    <MoreText>Learn More</MoreText>
                </section>
                <SectionTwo>
                    <div>
                        <GenericH2>Our Passion</GenericH2>
                        <GenereicPara lessSize grey>Most good programmers do programming not because they expect to get paid,<br />
                            but because it's fun to program.</GenereicPara>
                        <h5>- Linus Torvalds</h5>
                    </div>
                    <span>
                        <FontAwesomeIcon icon="gem" color="#04F5C6" size="6x" style={{marginRight: '3rem'}}
                            fixedWidth border
                        />
                        <FontAwesomeIcon icon="heart" color="#00F0FF" size="6x" style={{marginRight: '3rem'}}
                            fixedWidth border
                        />
                        <FontAwesomeIcon icon="code" color="#73DBFD" size="6x" fixedWidth border />
                    </span>
                </SectionTwo>
                <SectionThree>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="pic01.jpg" alt="pic01"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>Website Development</GenericH2>
                            <GenereicPara lessSize lessSpacing>We hand code beautiful websites using HTML5, CSS3, JS because they are fully customizable and efficient. No Worpress websites here.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex inverse>
                        <div className="text__section3">
                            <GenericH2 none>Website Design</GenericH2>
                            <GenereicPara lessSize lessSpacing>We have talented and experienced Web Designers, who can design beautiful and usable websites.</GenereicPara>
                        </div>
                        <div className="image">
                            <img src="pic02.jpg" alt="pic02"/>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="pic03.jpg" alt="pic03"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>Mobile App Development</GenericH2>
                            <GenereicPara lessSize lessSpacing>We develop Mobile apps in Reactive Native, which can be used in both ios and Android.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                </SectionThree>
                <SectionFour>
                    <div className="header__section4">
                        <div className="title__section4">Our Technologies</div>
                        <GenereicPara lessSize grey>We use modern and latest technologies which helps our clients<br />
                            as they are highly scalable and maintainable.
                        </GenereicPara>
                    </div>
                    <div className="grid__section4">
                        <div className="item1" style={{ backgroundColor: '#4D508E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faReact} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>React</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Modern JavaScript framework which will make your web application extremely fast and,
                                    at the same time, handy for every user.</GenereicPara>
                        </div>
                        <div className="item2" style={{ backgroundColor: '#4A4D89' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon="code" color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>React Native</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Cross-platform for mobile app development based on Javascript,
                                    whose resulting code is compiled to Android and iOS.</GenereicPara>
                        </div>
                        <div className="item3" style={{ backgroundColor: '#484A83' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faJs} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>JavaScript</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>JavaScript is the language of the web.
                                    It is used for Web development, mobile development and app development and everything else.</GenereicPara>
                        </div>
                        <div className="item4" style={{ backgroundColor: '#45477E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faHtml5} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>HTML5</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>HTML, a standardized system for tagging text files
                                    to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</GenereicPara>
                        </div>
                        <div className="item5" style={{ backgroundColor: '#424479' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faCss3} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>CSS3</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>CSS is a style sheet language used for describing the
                                    presentation of a document written in a markup language like HTML.</GenereicPara>
                        </div>
                        <div className="item6" style={{ backgroundColor: '#3F4174' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faGalacticSenate} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Gatsby</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Gatsby is a free and open source framework based on React
                                    that helps developers build blazing fast websites and apps</GenereicPara>
                        </div>
                    </div>
                </SectionFour>
                <section style={{ position: 'relative' }}>
                    <Banner parallax></Banner>
                    <FormFive>
                        {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
                        <form ref={this.domRef} name="agency_contact_us" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
                            <div className="fields">
                                <GenericH2 none>Contact Us</GenericH2>
                                <input ref="name" type="text" name="name" id="name" placeholder="Name" />
                                <input ref="email" type="email" name="email" id="email" placeholder="Email" />
                                <textarea ref="message" name="message" id="message" placeholder="Message" rows="7"></textarea>
                                <div className="actions">
                                    <input type="submit" value="Send Message" className="button__primary" />
                                </div>
                            </div>
                        </form>
                    </FormFive>
                </section>
            </Layout>
        )
      }
}

export default IndexPage;
