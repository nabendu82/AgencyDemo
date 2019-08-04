import React from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo, SectionThree, FlexBoxIndex, GenereicPara, GenericH2 } from "../styles/IndexStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faCode, faGem, fas);

export default () => (
    <>
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
                <FontAwesomeIcon
                    icon="gem"
                    color="#04F5C6"
                    size="6x"
                    style={{marginRight: '3rem'}}
                    fixedWidth
                    border
                />
                <FontAwesomeIcon
                    icon="heart"
                    color="#00F0FF"
                    size="6x"
                    fixedWidth
                    style={{marginRight: '3rem'}}
                    border
                />
                <FontAwesomeIcon
                    icon="code"
                    color="#73DBFD"
                    size="6x"
                    fixedWidth
                    border
                />
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
    </>
)
