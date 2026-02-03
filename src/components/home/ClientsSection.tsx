import { clients } from "../../data/siteData";

const ClientsSection = () => {
  return (
    <div className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
          Trusted by Industry Leaders
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto object-contain filter hover:filter-none transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
