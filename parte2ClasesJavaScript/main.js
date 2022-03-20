class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }

  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      "cursoJS",
      "cursoReact",
      "cursoNextJS",
    ],
  });

  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      "cursoPython",
      "CursoMatematicas",
      "CursoExcel",
    ],
  });

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email,
        this.username = username,
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        },
        this.approvedCourses = [] = approvedCourses,
        this.learningPaths = [] = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@platzi.com",
    twitter: "fjuanito",
    learningPaths:[
    escuelaWeb,
    ]
});

const miguelito = new Student({
    name: "miguel",
    username: "miguelito",
    email: "miguelito@platzi.com",
    instagram: "fmiguelito",
    learningPaths:[
    escuelaData,
    escuelaWeb,
    ]
});