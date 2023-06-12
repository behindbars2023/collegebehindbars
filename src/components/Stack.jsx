import React, { useState } from 'react';
import './stack.css';

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        // setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div class="div-block-7 snipcss0-3-3-5 snipcss0-8-21-23 snipcss-P1QFj style-4whSG" id="style-4whSG">
                <div class="orig_liner snipcss0-4-5-6 snipcss0-9-23-24 style-T4qWc" id="style-T4qWc">
                </div>
                <div class="orig_arrow_container_center snipcss0-4-5-7 snipcss0-9-23-25">
                    <div class="down_arrow_white snipcss0-5-7-8 snipcss0-10-25-26 style-r4gay" id="style-r4gay">
                    </div>
                    <div class="down_arrow_purple snipcss0-5-7-9 snipcss0-10-25-27 style-1vaCT" id="style-1vaCT">
                    </div>
                </div>
                <div onClick={toggleAccordion} class="orig_white_text snipcss0-4-5-10 snipcss0-9-23-28 style-s4lS4" id="style-s4lS4">
                    {title}
                </div>
                <div class="orig_hours_container snipcss0-4-5-11 snipcss0-9-23-29 style-5UBGB" id="style-5UBGB">
                </div>
            </div>


            {isOpen && (
                <div className="accordion__content">
                    <div class="div-block-9 snipcss0-4-14-29 snipcss0-9-32-47">
                        <div class="orig_text_curricilum snipcss0-5-29-30 snipcss0-10-47-48">
                            {content.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Accordion;
