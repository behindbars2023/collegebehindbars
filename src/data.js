import {FaDatabase} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {GiTiedScroll} from 'react-icons/gi'
import {DiRuby} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiNodejs} from 'react-icons/di'


export const links = [
    {
        name: "Home",
        path: 'root'
    }, 
    {
        name: "About",
        path: 'about'
    }, 
    {
        name: "Why It Matters",
        path: 'why_it_matters'
    },
    {
        name: "Curriculum",
        path: 'curriculum'
    },
    {
        name: "Capstone project",
        path: 'c_project'
    },  
    {
        name: "Programs",
        path: "programs"
    },
    {
        name: "Partners",
        path: "partners"
    },
    {
        name: "Testimonials",
        path: "testimonials"
    },
    {
        name: "Sponsors",
        path: "sponsors"
    },
    {
        name: "Contact Us",
        path: "contact"
    }  
]

export const programs = [
    {
        id: 1,
        icon: <DiRuby/>,
        title: "RUBY",
    },
    {
        id: 2,
        icon: <FaDatabase/>,
        title: "DATABASES",
    },
    {
        id: 3,
        icon: <DiRuby/>,
        title: "RUBY ON RAILS",
    },
    {
        id: 4,
        icon: <DiJavascript/>,
        title: "JAVASCRIPT",
    },
    {
        id: 5,
        icon: <AiOutlineHtml5/>,
        title: "INTERMEDIATE HTML AND CSS",
    },
    {
        id: 6,
        icon: <AiOutlineHtml5/>,
        title: "ADVANCED HTML AND CSS",
    },
    {
        id: 7,
        icon: <DiNodejs/>,
        title: "NODEJS",
    },
    {
        id: 8,
        icon: <GiTiedScroll/>,
        title: "GETTING HIRED",
    },
]


export const testimonials = [
    {
        id: 1,
        name: "Florence Najat",
        quote: "This is a step in the right direction.  I want to show my kids that their father is going above and beyond in trying to come home, I went from solitary confinement to being in a College course for software development.  Who would have thought?",
        job: "Retrocube Technologies, Colorado, Uganda 🇺🇬",
        avatar: require("./images/avatar2.webp")
    },
    {
        id: 2,
        name: "Lucas Khune",
        quote: "When i get out there,  i wouldn't let the labels get me down,Ex Convict, Ex Prisoner ! No. A software developer & Graduate. That’s who I am.",
        job: " System Analyst At Synthesis Software Technologies . Johannesburg South Africa 🇿🇦",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 3,
        name: "Angelo Mulit",
        quote: "I feel like I have a whole new area of jobs that I am qualified for and that is a wonderful new insight.",
        job: "Junior Web Engineer At BlueChip Solutions, Nairobi Kenya 🇰🇪",
        avatar: require("./images/avatar3.png")
    },
    {
        id: 4,
        name: "Jona Morison",
        quote: "Before I realized it I had my own website that I coded, built, and designed myself.",
        job: "Software Enginneer, Nairobi Kenya 🇰🇪",
        avatar: require("./images/avatar2.png")
    },
]
