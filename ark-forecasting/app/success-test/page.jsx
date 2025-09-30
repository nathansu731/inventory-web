export default function Page() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative max-w-2xl mx-auto text-center">
        <div className="bg-black text-white rounded-xl shadow-lg p-8 md:p-12 border border-neutral-800">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-6">
            We appreciate your business. A confirmation email will be sent to
            your inbox shortly. If you have any questions, feel free to reach
            out.
          </p>
          <a
            href="mailto:orders@example.com"
            className="inline-block text-sm md:text-base font-medium text-primary hover:underline"
          >
            orders@ark.com
          </a>
        </div>
      </div>
    </section>
  );
}
