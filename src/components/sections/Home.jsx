import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {

    return (

        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                        Hi I'm Carlos Gonzalez
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        Pariatur irure fugiat enim ea quis irure minim duis veniam incididunt proident anim do. Dolor nisi est mollit occaecat 
                        nostrud excepteur duis commodo proident ut. Culpa consectetur culpa consequat adipisicing id Lorem anim consequat occaecat
                        cupidatat eiusmod anim consequat ea. Non veniam do nisi veniam minim proident magna officia enim ut. Deserunt sunt laboris
                        officia nisi fugiat adipisicing cillum in. Cupidatat Lorem commodo anim sit. Commodo reprehenderit minim amet anim consequat est.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10">Contact Me</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};