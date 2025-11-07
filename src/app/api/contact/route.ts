import { NextRequest, NextResponse } from "next/server";

const PHP_API_URL = process.env.PHP_API_URL + "/contact/submit_contact.php";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validáljuk a mezőket
    const { name, email, phone, language, method, current_level, location, message } = body;
    
    if (!name || !email || !phone || !language || !method || !current_level || !location || !message) {
      return NextResponse.json(
        { success: false, message: "Toate câmpurile sunt obligatorii." },
        { status: 400 }
      );
    }

    // Email validáció
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Adresa de email nu este validă." },
        { status: 400 }
      );
    }

    // Küldjük el a PHP backend-nek
    const res = await fetch(PHP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        language,
        method,
        current_level,
        location,
        message,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: data.message || "A apărut o eroare la trimiterea mesajului." },
        { status: res.status }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Mesajul a fost trimis cu succes!",
        data: data.data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { success: false, message: "Eroare de server. Vă rugăm să încercați mai târziu." },
      { status: 500 }
    );
  }
}