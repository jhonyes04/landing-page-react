export const Footer = () => {
    const fecha = new Date().getFullYear();
    return (
        <div className="container-fluid bg-dark text-center p-4">
            <p className="text-white m-0">
                Copyrigth &copy; Landing Page React {fecha}
            </p>
        </div>
    );
};
