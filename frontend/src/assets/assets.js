import appointment_img from './appointment_img.png'
import pink from './pink.png'
import localhirelogo from './localhirelogo.png'
import about_img from './about_img.png'
import service_img from './service_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import mechanic from './mechanic.svg'
import cleaning from './cleaning.svg'
import household from './household.svg'
import technician from './technician.svg'
import transport from './transport.svg'
import electrician from './electrician.svg'


export const assets = {
    appointment_img,
    pink,
    group_profiles,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    service_img,
    about_img,
    localhirelogo
}

export const specialityData = [
    {
        speciality: 'Household Services', 
        image: household         
    },
    {
        speciality: 'Electronic Repair Services', 
        image: technician        
    },
    {
        speciality: 'Automotive Services', 
        image: mechanic         
    },
    {
        speciality: 'Electric Services',
        image: electrician         
    },
    {
        speciality: 'Transport Logistics Services', 
        image: transport         
    },
    {
        speciality: 'Cleaning Services', 
        image: cleaning         
    },
]

/**
 * An array of contractor objects, each representing a medical professional with various details.
 * 
 * @typedef {Object} Contractor
 * @property {string} _id - Unique identifier for the contractor.
 * @property {string} name - Name of the contractor.
 * @property {string} image - Image URL or path of the contractor.
 * @property {string} speciality - Speciality of the contractor.
 * @property {string} degree - Degree of the contractor.
 * @property {string} experience - Experience of the contractor in years.
 * @property {string} about - Description about the contractor.
 * @property {number} fees - Consultation fees of the contractor.
 * @property {Object} address - Address of the contractor.
 * @property {string} address.line1 - First line of the address.
 * @property {string} address.line2 - Second line of the address.
 * 
 * @type {Contractor[]}
 */
