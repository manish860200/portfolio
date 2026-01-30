export async function onRequestPost({ request }) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return new Response(JSON.stringify({
                success: false,
                message: "Please fill in all required fields."
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Web3Forms Integration (FORCE SYNC ID: PRM-86-v2)
        const accessKey = "b2e918c5-3967-4895-af6d-dbe54405527e";

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                subject: subject || "Verified New Email Contact",
                message: message,
                from_name: "Portfolio REBORN"
            }),
        });

        const result = await response.json();

        if (result.success) {
            return new Response(JSON.stringify({
                success: true,
                message: "Success! Message sent to manish.prm86@gmail.com inbox."
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({
                success: false,
                message: result.message || "Failed to send email. Please try again later."
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

    } catch (err) {
        return new Response(JSON.stringify({
            success: false,
            message: "Server error. Please try again later."
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
