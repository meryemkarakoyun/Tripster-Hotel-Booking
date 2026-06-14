# 🏨 Tripster — Hotel Booking
A full-stack accommodation listing application built with **React**, **Express**, and **TailwindCSS**. Users can browse nearby places, filter and sort listings, view detailed accommodation info with amenities & map, and manage places via create and delete actions — powered by a **REST API** and **JSON file storage**.  

## 🚀 Features
- 🖼️ **Hero Section** – Welcome banner on the home page.
- 🔍 **Filtering & Sorting** – Filter by location and place name; sort by price or rating.
- 🏠 **Place Cards** – Image, rating badge, availability status, amenities preview, and nightly price.
- 📄 **Place Detail Page** – Image gallery, description, amenities list, and Google Maps embed.
- ⭐ **Rating Display** – Color-coded rating badges with labels (Çok İyi, İyi, Orta, Kötü).
- ✅ **Availability Status** – Visual indicator for available / unavailable places.
- ➕ **Create Place Form** – Admin form with **Formik** and **Yup** validation.
- 🗑️ **Delete Place** – Remove a place from the detail page with toast feedback.
- ⚡ **TanStack React Query** – Data fetching, caching, and mutation handling.
- 🔔 **Toast Notifications** – Success and error messages via React Toastify.
- 📱 **Fully Responsive** – Clean layout optimized for mobile and desktop.

  
## 🛠️ Tech Stack

<div align="center">
  
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)

</div>


| Technology | Purpose |
|------------|---------|
| **React 19** | Core UI library |
| **TypeScript** | Type-safe frontend development |
| **React Router DOM v7** | Client-side routing |
| **TanStack React Query** | Server state management & async data |
| **Formik + Yup** | Form handling & validation |
| **Axios** | HTTP requests to REST API |
| **TailwindCSS v4** | Utility-first styling |
| **Lucide React** | Icon library |
| **React Toastify** | Toast notifications |
| **Vite** | Frontend dev server & build tool |
| **Express 4** | Backend REST API |
| **JSON File Storage** | Persistent data via `data.json` |
| **Google Maps Embed API** | Location map on detail page |


## 📄 Pages
| Route | Description |
|-------|-------------|
| `/` | Home — hero section, filters & place list |
| `/place/:id` | Place detail — gallery, info, amenities, map & delete |
| `/admin/create` | Create form — add a new accommodation place |

## 📽️ Demo

<div align="center">
<img width="800" height="400" alt="HotelBooking mp4-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/743a9d0c-8206-476b-9043-360b559d20d8" />

</div>
