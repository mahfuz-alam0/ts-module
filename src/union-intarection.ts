type NoobDeveloper = {
    name: string
}

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}


type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: "Senior"| "Mid" | "Junior"
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Mojnu mia',
    expertise: 'React',
    experience: 1
}

const nextLevelDeveloper = {
    name: 'Next Sofiq Mia',
    expertise: 'TypeScript',
    experience: 2,
    leadershipExperience: 1,
    level: "Senior"
}