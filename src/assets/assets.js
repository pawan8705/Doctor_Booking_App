import appointment_img from './appointment_img.png'
import group_profiles from './group_profiles.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'

// Doctor images (doc1–doc20, cycled for doc21–doc40)
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.jpg'
import doc17 from './doc17.jpg'
import doc18 from './doc18.jpg'
import doc19 from './doc19.jpg'
import doc20 from './doc20.jpg'

// Existing speciality icons
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import Physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import Cardiologist from './docicon1.png'
import Orthopedic from './docicon2.png'
import Psychiatrist from './docicon3.png'
import Ophthalmologist from './docicon4.svg'


// Admin & UI icons
import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'

export const assets = {
    appointment_img, group_profiles, logo, chats_icon,
    verified_icon, info_icon, arrow_icon, contact_image, about_image,
    menu_icon, cross_icon, dropdown_icon, upload_icon, add_icon,
    admin_logo, appointment_icon, cancel_icon, doctor_icon, upload_area,
    home_icon, patients_icon, people_icon, list_icon, tick_icon,
    appointments_icon, earning_icon, Physician, Gynecologist,
    Dermatologist, Pediatricians, Neurologist, Gastroenterologist,
    doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9, doc10,
    doc11, doc12, doc13, doc14, doc15, doc16, doc17, doc18, doc19, doc20,
}


// ─── SPECIALITY DATA (10 total) ──────────────────────────────────────────────
export const specialityData = [
    { speciality: 'Physician', image: Physician },
    { speciality: 'Gynecologist', image: Gynecologist },
    { speciality: 'Dermatologist', image: Dermatologist },
    { speciality: 'Pediatricians', image: Pediatricians },
    { speciality: 'Neurologist', image: Neurologist },
    { speciality: 'Gastroenterologist', image: Gastroenterologist },
    { speciality: 'Cardiologist', image: Cardiologist },
    { speciality: 'Orthopedic', image: Orthopedic },
    { speciality: 'Psychiatrist', image: Psychiatrist },
    { speciality: 'Ophthalmologist', image: Ophthalmologist },
]

// ─── HELPER ──────────────────────────────────────────────────────────────────
const bio = (name, spec, detail) =>
    `Dr. ${name} is a dedicated ${spec} specialist committed to patient-centered care. ${detail} Known for a compassionate approach, precision diagnosis, and evidence-based treatment strategies.`

// ─── 40 DOCTORS ──────────────────────────────────────────────────────────────
export const doctors = [

    // ══ PHYSICIAN (5) ══
    {
        _id: 'doc1', name: 'Dr. Richard James', image: doc1,
        speciality: 'Physician', degree: 'MBBS', experience: '4 Years',
        about: bio('Richard James', 'general medicine', 'Focuses on preventive care, diabetes, and hypertension management.'),
        fees: 50, address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc7', name: 'Dr. Christopher Davis', image: doc7,
        speciality: 'Physician', degree: 'MBBS', experience: '4 Years',
        about: bio('Christopher Davis', 'internal medicine', 'Experienced in managing chronic illnesses and lifestyle diseases.'),
        fees: 50, address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc13', name: 'Dr. Chloe Evans', image: doc13,
        speciality: 'Physician', degree: 'MBBS', experience: '4 Years',
        about: bio('Chloe Evans', 'general practice', 'Specialises in thyroid disorders and metabolic conditions.'),
        fees: 50, address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc24', name: 'Dr. Rohit Kapoor', image: doc1,
        speciality: 'Physician', degree: 'MBBS, MD General Medicine', experience: '10 Years',
        about: bio('Rohit Kapoor', 'general medicine', 'A decade of expertise in diabetes, hypertension, and respiratory conditions.'),
        fees: 60, address: { line1: '22nd Cross, Jubilee Hills', line2: 'Hyderabad, Telangana' }
    },
    {
        _id: 'doc27', name: 'Dr. Anjali Nair', image: doc13,
        speciality: 'Physician', degree: 'MBBS, DNB Internal Medicine', experience: '5 Years',
        about: bio('Anjali Nair', 'internal medicine', 'Focuses on preventive care, respiratory conditions, and chronic disease management.'),
        fees: 50, address: { line1: 'MG Road, Ernakulam', line2: 'Kochi, Kerala' }
    },

    // ══ GYNECOLOGIST (4) ══
    {
        _id: 'doc2', name: 'Dr. Emily Larson', image: doc2,
        speciality: 'Gynecologist', degree: 'MBBS', experience: '3 Years',
        about: bio('Emily Larson', 'gynaecology', 'Expert in obstetrics, fertility treatments, and hormonal disorders.'),
        fees: 60, address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc8', name: 'Dr. Timothy White', image: doc8,
        speciality: 'Gynecologist', degree: 'MBBS', experience: '3 Years',
        about: bio('Timothy White', 'gynaecology', 'Specialises in high-risk pregnancies and laparoscopic surgeries.'),
        fees: 60, address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc14', name: 'Dr. Ryan Martinez', image: doc14,
        speciality: 'Gynecologist', degree: 'MBBS', experience: '3 Years',
        about: bio('Ryan Martinez', 'gynaecology', 'Expert in PCOS management, prenatal care, and minimally invasive procedures.'),
        fees: 60, address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc21', name: 'Dr. Priya Sharma', image: doc3,
        speciality: 'Gynecologist', degree: 'MBBS, MD', experience: '6 Years',
        about: bio('Priya Sharma', 'gynaecology', 'Known for compassionate care in high-risk pregnancies and women\'s wellness.'),
        fees: 75, address: { line1: '12th Cross, Indiranagar', line2: 'Bangalore, Karnataka' }
    },

    // ══ DERMATOLOGIST (5) ══
    {
        _id: 'doc3', name: 'Dr. Sarah Patel', image: doc3,
        speciality: 'Dermatologist', degree: 'MBBS', experience: '1 Years',
        about: bio('Sarah Patel', 'dermatology', 'Focuses on acne, eczema, and general skin health.'),
        fees: 30, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc9', name: 'Dr. Ava Mitchell', image: doc9,
        speciality: 'Dermatologist', degree: 'MBBS', experience: '1 Years',
        about: bio('Ava Mitchell', 'dermatology', 'Specialises in skin allergies, psoriasis, and cosmetic dermatology.'),
        fees: 30, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc15', name: 'Dr. Amelia Hill', image: doc15,
        speciality: 'Dermatologist', degree: 'MBBS', experience: '1 Years',
        about: bio('Amelia Hill', 'dermatology', 'Expert in hair loss treatments and pigmentation disorders.'),
        fees: 30, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc16', name: 'Dr. Jack Paul', image: doc16,
        speciality: 'Dermatologist', degree: 'MBBS', experience: '3 Years',
        about: bio('Jack Paul', 'dermatology', 'Known for laser treatments and anti-ageing skincare expertise.'),
        fees: 80, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc23', name: 'Dr. Sunita Verma', image: doc9,
        speciality: 'Dermatologist', degree: 'MBBS, MD Dermatology', experience: '5 Years',
        about: bio('Sunita Verma', 'dermatology', 'Combines clinical expertise with the latest aesthetic procedures including chemical peels.'),
        fees: 55, address: { line1: '8th Avenue, Connaught Place', line2: 'New Delhi, Delhi' }
    },

    // ══ PEDIATRICIANS (4) ══
    {
        _id: 'doc4', name: 'Dr. Christopher Lee', image: doc4,
        speciality: 'Pediatricians', degree: 'MBBS', experience: '2 Years',
        about: bio('Christopher Lee', 'paediatrics', 'Experienced in child health, immunisation, and developmental disorders.'),
        fees: 40, address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc10', name: 'Dr. Jeffrey King', image: doc10,
        speciality: 'Pediatricians', degree: 'MBBS', experience: '2 Years',
        about: bio('Jeffrey King', 'paediatrics', 'Specialises in neonatal care and childhood nutrition.'),
        fees: 40, address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc25', name: 'Dr. Meera Iyer', image: doc2,
        speciality: 'Pediatricians', degree: 'MBBS, MD Pediatrics', experience: '7 Years',
        about: bio('Meera Iyer', 'paediatrics', 'Loved by children and parents for her gentle, reassuring approach in neonatal and adolescent care.'),
        fees: 55, address: { line1: '14th Main, Malleshwaram', line2: 'Bangalore, Karnataka' }
    },
    {
        _id: 'doc30', name: 'Dr. Nikhil Joshi', image: doc4,
        speciality: 'Pediatricians', degree: 'MBBS, DCH, DNB Pediatrics', experience: '6 Years',
        about: bio('Nikhil Joshi', 'paediatrics', 'Passionate about preventive paediatric care, ADHD management, and adolescent health.'),
        fees: 60, address: { line1: '7th Cross, Shivajinagar', line2: 'Pune, Maharashtra' }
    },

    // ══ NEUROLOGIST (4) ══
    {
        _id: 'doc5', name: 'Dr. Jennifer Garcia', image: doc5,
        speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years',
        about: bio('Jennifer Garcia', 'neurology', 'Expert in epilepsy, migraines, and nerve conduction studies.'),
        fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc6', name: 'Dr. Andrew Williams', image: doc6,
        speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years',
        about: bio('Andrew Williams', 'neurology', 'Specialises in stroke rehabilitation and Parkinson\'s disease management.'),
        fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc11', name: 'Dr. Zoe Kelly', image: doc11,
        speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years',
        about: bio('Zoe Kelly', 'neurology', 'Focused on multiple sclerosis and headache disorders.'),
        fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc12', name: 'Dr. Patrick Harris', image: doc12,
        speciality: 'Neurologist', degree: 'MBBS', experience: '4 Years',
        about: bio('Patrick Harris', 'neurology', 'Experienced in neuromuscular diseases and sleep disorders.'),
        fees: 50, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },

    // ══ GASTROENTEROLOGIST (4) ══
    {
        _id: 'doc17', name: 'Dr. Ragini Gill', image: doc17,
        speciality: 'Gastroenterologist', degree: 'MBBS', experience: '2 Years',
        about: bio('Ragini Gill', 'gastroenterology', 'Specialises in IBS, acid reflux, and colonoscopy procedures.'),
        fees: 70, address: { line1: '20th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc18', name: 'Dr. Pule Res', image: doc18,
        speciality: 'Gastroenterologist', degree: 'MBBS', experience: '5 Years',
        about: bio('Pule Res', 'gastroenterology', 'Expert in liver disorders, hepatitis management, and endoscopic procedures.'),
        fees: 80, address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc19', name: 'Dr. David Mat', image: doc19,
        speciality: 'Gastroenterologist', degree: 'MBBS', experience: '3 Years',
        about: bio('David Mat', 'gastroenterology', 'Focuses on Crohn\'s disease, ulcerative colitis, and digestive wellness.'),
        fees: 60, address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc26', name: 'Dr. Vikram Singh', image: doc6,
        speciality: 'Gastroenterologist', degree: 'MBBS, DM Gastroenterology', experience: '9 Years',
        about: bio('Vikram Singh', 'gastroenterology', 'Known for precision in advanced endoscopic procedures and patient education on gut health.'),
        fees: 85, address: { line1: '3rd Floor, Apollo Complex', line2: 'Chennai, Tamil Nadu' }
    },

    // ══ CARDIOLOGIST (4) — NEW ══
    {
        _id: 'doc31', name: 'Dr. Aditya Khanna', image: doc5,
        speciality: 'Cardiologist', degree: 'MBBS, MD, DM Cardiology', experience: '11 Years',
        about: bio('Aditya Khanna', 'cardiology', 'Senior interventional cardiologist specialising in angioplasty, heart failure management, and preventive cardiology.'),
        fees: 100, address: { line1: 'Sector 18, Noida', line2: 'Uttar Pradesh, Delhi NCR' }
    },
    {
        _id: 'doc32', name: 'Dr. Lavanya Menon', image: doc2,
        speciality: 'Cardiologist', degree: 'MBBS, MD Cardiology', experience: '7 Years',
        about: bio('Lavanya Menon', 'cardiology', 'Expertise in echocardiography, arrhythmia management, and cardiac rehabilitation.'),
        fees: 90, address: { line1: 'Nungambakkam High Road', line2: 'Chennai, Tamil Nadu' }
    },
    {
        _id: 'doc33', name: 'Dr. Sameer Bhatia', image: doc11,
        speciality: 'Cardiologist', degree: 'MBBS, DNB Cardiology', experience: '6 Years',
        about: bio('Sameer Bhatia', 'cardiology', 'Focuses on hypertension, lipid disorders, and lifestyle-based cardiac risk reduction.'),
        fees: 85, address: { line1: 'Linking Road, Bandra', line2: 'Mumbai, Maharashtra' }
    },
    {
        _id: 'doc34', name: 'Dr. Natasha Iyer', image: doc14,
        speciality: 'Cardiologist', degree: 'MBBS, MD, Fellowship Interventional Cardiology', experience: '9 Years',
        about: bio('Natasha Iyer', 'cardiology', 'Specialises in women\'s heart health, congenital heart conditions, and stress echocardiography.'),
        fees: 95, address: { line1: 'Infantry Road', line2: 'Bangalore, Karnataka' }
    },

    // ══ ORTHOPEDIC (4) — NEW ══
    {
        _id: 'doc35', name: 'Dr. Manish Gupta', image: doc7,
        speciality: 'Orthopedic', degree: 'MBBS, MS Orthopaedics', experience: '8 Years',
        about: bio('Manish Gupta', 'orthopaedics', 'Expert in joint replacement surgeries, sports injuries, and spine disorders.'),
        fees: 80, address: { line1: 'Rajouri Garden', line2: 'New Delhi, Delhi' }
    },
    {
        _id: 'doc36', name: 'Dr. Kavya Nambiar', image: doc15,
        speciality: 'Orthopedic', degree: 'MBBS, DNB Orthopaedics', experience: '5 Years',
        about: bio('Kavya Nambiar', 'orthopaedics', 'Specialises in arthroscopic surgeries, fracture management, and paediatric orthopaedics.'),
        fees: 70, address: { line1: 'Palarivattom', line2: 'Ernakulam, Kerala' }
    },
    {
        _id: 'doc37', name: 'Dr. Suresh Pillai', image: doc12,
        speciality: 'Orthopedic', degree: 'MBBS, MS, Fellowship Joint Replacement', experience: '14 Years',
        about: bio('Suresh Pillai', 'orthopaedics', 'One of South India\'s most experienced joint replacement surgeons with over 2000 successful procedures.'),
        fees: 110, address: { line1: 'Jubilee Hills Road No. 36', line2: 'Hyderabad, Telangana' }
    },

    // ══ PSYCHIATRIST (4) — NEW ══
    {
        _id: 'doc38', name: 'Dr. Ritu Agarwal', image: doc13,
        speciality: 'Psychiatrist', degree: 'MBBS, MD Psychiatry', experience: '6 Years',
        about: bio('Ritu Agarwal', 'psychiatry', 'Specialises in anxiety disorders, depression, OCD, and cognitive behavioural therapy.'),
        fees: 75, address: { line1: 'Koregaon Park', line2: 'Pune, Maharashtra' }
    },
    {
        _id: 'doc39', name: 'Dr. Siddharth Roy', image: doc8,
        speciality: 'Psychiatrist', degree: 'MBBS, DPM, MD Psychiatry', experience: '9 Years',
        about: bio('Siddharth Roy', 'psychiatry', 'Expert in bipolar disorder, schizophrenia, PTSD, and adolescent mental health.'),
        fees: 85, address: { line1: 'Salt Lake City, Sector V', line2: 'Kolkata, West Bengal' }
    },

    // ══ OPHTHALMOLOGIST (3) — NEW ══
    {
        _id: 'doc20', name: 'Dr. Madi Red', image: doc20,
        speciality: 'Ophthalmologist', degree: 'MBBS, MS Ophthalmology', experience: '4 Years',
        about: bio('Madi Red', 'ophthalmology', 'Specialises in cataract surgery, glaucoma management, and refractive errors.'),
        fees: 55, address: { line1: '40th Cross, Richmond', line2: 'Circle, Ring Road, London' }
    },
    {
        _id: 'doc22', name: 'Dr. Arjun Mehta', image: doc7,
        speciality: 'Ophthalmologist', degree: 'MBBS, DNB Ophthalmology', experience: '8 Years',
        about: bio('Arjun Mehta', 'ophthalmology', 'Expert in LASIK surgery, diabetic retinopathy, and paediatric eye conditions.'),
        fees: 70, address: { line1: '5th Block, Koramangala', line2: 'Bangalore, Karnataka' }
    },
    {
        _id: 'doc40', name: 'Dr. Pooja Tiwari', image: doc9,
        speciality: 'Ophthalmologist', degree: 'MBBS, MS, Fellowship Vitreoretinal Surgery', experience: '7 Years',
        about: bio('Pooja Tiwari', 'ophthalmology', 'Specialises in complex retinal surgeries, macular degeneration, and corneal transplants.'),
        fees: 80, address: { line1: 'Civil Lines', line2: 'Jaipur, Rajasthan' }
    },
    {
        _id: 'doc28', name: 'Dr. Karan Malhotra', image: doc12,
        speciality: 'Neurologist', degree: 'MBBS, MD, DM Neurology', experience: '12 Years',
        about: bio('Karan Malhotra', 'neurology', 'One of North India\'s most sought-after neurologists for complex epilepsy and movement disorders.'),
        fees: 110, address: { line1: 'Sector 44, Gurugram', line2: 'Haryana, Delhi NCR' }
    },
    {
        _id: 'doc29', name: 'Dr. Divya Reddy', image: doc15,
        speciality: 'Dermatologist', degree: 'MBBS, MD, Fellowship Cosmetic Dermatology', experience: '4 Years',
        about: bio('Divya Reddy', 'dermatology', 'Combines medical dermatology with aesthetic expertise in laser therapy and vitiligo management.'),
        fees: 65, address: { line1: 'Road No. 10, Banjara Hills', line2: 'Hyderabad, Telangana' }
    },
]

export const AboutData = [
    { A_id: '1', heading: "EFFICIENCY", note: "Streamlined appointment scheduling that fits into your busy lifestyle." },
    { A_id: '2', heading: "PERSONALIZATION", note: "Tailored recommendations and reminders to help you stay on top of your health." },
    { A_id: '3', heading: "CONVENIENCE", note: "Access to a network of trusted healthcare professionals in your area." },
    { A_id: '4', heading: "ACCESSIBLE", note: "Streamlined appointment scheduling that fits into your busy lifestyle." },
    { A_id: '5', heading: "PRODUCTIVE", note: "Tailored recommendations and reminders to help you stay on top of your health." },
    { A_id: '6', heading: "PRECISION", note: "Streamlined appointment scheduling that fits into your busy lifestyle." },
]
