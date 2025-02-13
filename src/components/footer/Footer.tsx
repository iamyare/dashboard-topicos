const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <p className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <span className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{new Date().getFullYear()} TechStore Honduras. Todos los derechos reservados.
        </span>
      </p>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="mailto:soporte@techstore.hn"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Soporte
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="/about"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="/terminos"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Términos de Uso
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="/contacto"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
