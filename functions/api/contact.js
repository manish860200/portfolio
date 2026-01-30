export async function onRequestPost(context) {
    try {
        const data = await context.request.json();
        const { name, email, subject, message } = data;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, message: "Missing required fields" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // In a production environment, you would use an email service here.
        // For Cloudflare, you could use MailChannels (free for Cloudflare Workers/Pages)
        // or a simple fetch to a webhook/API.

        console.log(`New contact form submission:`, { name, email, subject, message });

        // Mock successful response
        // If the user adds env variables for a service, we can implement it here.
        return new Response(
            JSON.stringify({
                success: true,
                message: "Message received! (Note: Cloudflare backend is active, email service needs to be configured in environment variables)"
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, message: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
