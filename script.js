const courses = [
    { id: 1, title: "Técnico en sistemas informáticos", category: "diplomados", image: "photos/administracion-sistemas-informaticos-red-956x637.jpg", link: "https://capacitateparaelempleo.org/interna-diplomado/23" },
    { id: 2, title: "Técnico en integridad web", category: "diplomados", image: "photos/integridad web.jpg", link: "https://capacitateparaelempleo.org/interna-diplomado/24" },
    { id: 3, title: "Técnico en Big Data", category: "diplomados", image: "photos/Big data.jpg", link: "https://capacitateparaelempleo.org/interna-diplomado/25" },
    { id: 4, title: "Desarrollo de sitios web y aplicaciones móviles", category: "diplomados", image: "photos/Desarrollo de sitios web y aplicaciones móviles.jpg", link: "https://capacitateparaelempleo.org/interna-diplomado/26" },
    { id: 5, title: "Gestión de ambientes virtuales de aprendizaje", category: "diplomados", image: "photos/ambiente.png", link: "https://capacitateparaelempleo.org/interna-diplomado/27" },
    { id: 6, title: "Desarrollo de estrategias digitales de aprendizaje", category: "diplomados", image: "photos/Desarrollo de estrategias digitales de aprendizaje.jpg", link: "https://capacitateparaelempleo.org/interna-diplomado/28" },
    { id: 7, title: "Técnico en inteligencia de negocios", category: "diplomados", image: "photos/Técnico en inteligencia de negocios.jpg", link: "https://capacitateparaelempleo.org/interna-diplomado/29" },
    { id: 8, title: "Técnico en cómputo en la nube", category: "diplomados", image: "photos/Técnico en cómputo en la nube.png", link: "https://capacitateparaelempleo.org/interna-diplomado/30" },
    { id: 9, title: "Fundamentos de Full Stack", category: "diplomados", image: "photos/Fundamentos de Full Stack.jpg", link: "https://capacitateparaelempleo.org/interna-diplomado/62" },
    { id: 10, title: "Desarrollador de videojuegos", category: "programacion", image: "photos/Desarrollador de videojuegos.jpg", link: "https://capacitateparaelempleo.org/cursos/view/111" },
    { id: 11, title: "Programador (orientado a objetos)", category: "programacion", image: "photos/Programador (orientado a objetos).jpg", link: "https://capacitateparaelempleo.org/cursos/view/71" },
    { id: 12, title: "Curso de introducción al desarrollo web: HTML y CSS (1/2)", category: "programacion", image: "photos/html y css 1.jpg", link: "https://skillshop.exceedlms.com/student/collection/799479-web-development-i" },
    { id: 13, title: "Curso de introducción al desarrollo web: HTML y CSS (2/2)", category: "programacion", image: "photos/html y css 1.jpg", link: "https://skillshop.exceedlms.com/student/collection/800472-web-development-ii" },
    { id: 14, title: "Programador en C#", category: "programacion", image: "photos/c-sharp-curso-gratuito.jpg", link: "https://capacitateparaelempleo.org/cursos/view/277" },
    { id: 15, title: "Diseñador de experiencia de usuario (UX)", category: "diseno", image: "photos/Diseñador de experiencia de usuario (UX).jpg", link: "https://capacitateparaelempleo.org/cursos/view/132" },
    { id: 16, title: "Desarrollador Front-end", category: "programacion", image: "photos/Desarrollador Front-end.jpg", link: "https://capacitateparaelempleo.org/cursos/view/122" },
    { id: 17, title: "Desarrollador Back-end", category: "programacion", image: "photos/Desarrollador Back-end.jpg", link: "https://capacitateparaelempleo.org/cursos/view/121" },
    { id: 18, title: "Lógica de programación", category: "programacion", image: "photos/Lógica de programación.jpg", link: "https://capacitateparaelempleo.org/cursos/view/147" },
    { id: 19, title: "Cursos de inglés", category: "idiomas", image: "photos/Cursos de inglés.jpg", link: "https://www.curso-ingles.com/" },
    { id: 20, title: "Desarrollador de JavaScript (React)", category: "programacion", image: "photos/Desarrollador de JavaScript (React).jpg", link: "https://capacitateparaelempleo.org/cursos/view/100075" },
    { id: 21, title: "Desarrollador PHP (Orientado a objetos)", category: "programacion", image: "photos/Desarrollador PHP (Orientado a objetos).jpg", link: "https://capacitateparaelempleo.org/cursos/view/100311" },
    { id: 22, title: "Desarrollo móvil en línea", category: "programacion", image: "photos/Desarrollo móvil en línea.jpg", link: "https://capacitateparaelempleo.org/cursos/view/223" },
    { id: 23, title: "Curso de Desarrollo de Apps Móviles", category: "programacion", image: "photos/Curso de Desarrollo de Apps Móviles.jpg", link: "https://skillshop.exceedlms.com/student/collection/798207-apps?locale=es" },
    { id: 24, title: "Familiarízate con los principios básicos de la programación", category: "programacion", image: "photos/Familiarízate con los principios básicos de la programación.png", link: "https://skillshop.exceedlms.com/student/collection/668989-basics-code?sid=37fa107a-cbad-4ad6-acb8-6d19d437fc7e&sid_i=11" },
    { id: 25, title: "Exporta una empresa a otros países", category: "negocios", image: "photos/Exporta una empresa a otros países.jpg", link: "https://skillshop.exceedlms.com/student/collection/679109-expand-internationally?sid=37fa107a-cbad-4ad6-acb8-6d19d437fc7e&sid_i=22" },
    { id: 26, title: "Descubre qué necesitan los clientes y cómo se comportan en Internet", category: "negocios", image: "photos/descubre.jpg", link: "https://skillshop.exceedlms.com/student/collection/689583-customers-needs-behaviours?sid=37fa107a-cbad-4ad6-acb8-6d19d437fc7e&sid_i=20" },
    { id: 27, title: "Curso Git/Github", category: "programacion", image: "photos/git github.jpg", link: "https://campus-ademass.com/certificaciones/5" },
    { id: 28, title: "Curso de Linux", category: "programacion", image: "photos/Curso de Linux.jpeg", link: "https://campus-ademass.com/curso/111" },
    { id: 29, title: "Videojuegos con Unreal 5", category: "diseno", image: "photos/Videojuegos con Unreal 5.jpg", link: "https://campus-ademass.com/curso/82" },
    { id: 30, title: "Gestiona tu portafolio como desarrollador", category: "programacion", image: "photos/Gestiona tu portafolio como desarrollador.jpg", link: "https://capacitateparaelempleo.org/cursos/view/100216" },
    { id: 31, title: "Curso ThreeJS", category: "programacion", image: "photos/Curso ThreeJS.jpg", link: "https://campus-ademass.com/certificaciones/4" },
    { id: 32, title: "Curso TypeScript", category: "programacion", image: "photos/Curso TypeScript.jpeg", link: "https://campus-ademass.com/certificaciones/18" },
    { id: 33, title: "Curso Java", category: "programacion", image: "photos/curso Java.jpg", link: "https://campus-ademass.com/certificaciones/6" },
    { id: 34, title: "Curso Angular", category: "programacion", image: "photos/Angular.jpg", link: "https://campus-ademass.com/certificaciones/8" },
    { id: 35, title: "Tu negocio en Internet", category: "negocios", image: "photos/Tu negocio en Internet.jpg", link: "https://capacitateparaelempleo.org/cursos/view/343" },
    { id: 36, title: "Desarrollador de JavaScript (Node JS)", category: "programacion", image: "photos/nodejs.png", link: "https://capacitateparaelempleo.org/cursos/view/356" },
    { id: 37, title: "Curso SQL Server", category: "programacion", image: "photos/Curso SQL Server.jpg", link: "https://capacitateparaelempleo.org/cursos/view/344" },
    { id: 38, title: "Tus Clientes en Internet", category: "negocios", image: "photos/Tus Clientes en Internet.png", link: "https://capacitateparaelempleo.org/cursos/view/344" },
    { id: 39, title: "Desarrollador de interfaces gráficas", category: "programacion", image: "photos/Desarrollador de interfaces gráficas.jpg", link: "https://capacitateparaelempleo.org/cursos/view/133" },
    { id: 40, title: "Curso de NestJS", category: "programacion", image: "photos/Curso de NestJS.png", link: "https://campus-ademass.com/curso/31" },
    
];


function createCourseCard(course) {
    return `
        <div class="col-md-3 mb-4 course-item" data-category="${course.category}">
            <div class="card course-card h-100">
                <img src="${course.image}" class="card-img-top" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">Categoría: ${course.category}</p>
                    <a href="${course.link}" class="btn btn-primary" target="_blank">Ver curso</a>
                </div>
            </div>
        </div>
    `;
}

function renderCourses(coursesToRender = courses) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = coursesToRender.map(createCourseCard).join('');
}

function filterCourses(category) {
    if (category === 'all') {
        renderCourses();
    } else {
        const filteredCourses = courses.filter(course => course.category === category);
        renderCourses(filteredCourses);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCourses();

    const categoryLinks = document.querySelectorAll('.dropdown-item');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            filterCourses(category);
        });
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCourses = courses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) || 
            course.category.toLowerCase().includes(searchTerm)
        );
        renderCourses(filteredCourses);
    });
});