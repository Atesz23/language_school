import { NextRequest, NextResponse } from "next/server";

const PHP_API_URL = process.env.PHP_API_URL + "/popup/submit_popup_form.php";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validáljuk a mezőket
    const { name, email, phone } = body;
    
    if (!name || !email || !phone) {
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

    // Név validáció
    if (name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Numele trebuie să conțină cel puțin 2 caractere." },
        { status: 400 }
      );
    }

    // Telefon validáció (basic)
    if (phone.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Numărul de telefon nu este valid." },
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
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
      }),
    });

    const data = await res.json();

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: data.message || "A apărut o eroare la trimiterea datelor." },
        { status: res.status }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Datele au fost trimise cu succes!",
        data: data.data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Popup form API error:", error);
    return NextResponse.json(
      { success: false, message: "Eroare de server. Vă rugăm să încercați mai târziu." },
      { status: 500 }
    );
  }
}