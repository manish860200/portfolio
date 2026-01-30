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

        // Log the submission (visible in Cloudflare dashboard logs)
        console.log(`New contact form submission from ${name} (${email}): ${subject} - ${message}`);

        // In a real scenario, you would send an email here using a service like MailChannels,
        // SendGrid, or simply forwarding to a webhook.

        return new Response(JSON.stringify({
            success: true,
            message: "Thank you! Your message has been received by our Cloudflare backend."
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

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
