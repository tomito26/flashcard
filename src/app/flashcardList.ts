import { Topic } from "./flash-card/topic"
export let topics: Topic[] = [
    new Topic(1, "Angular", "Development platform used to build ui part of an application", new Date(2022, 10, 2)),
    new Topic(2, "Components", "Basic building block of an angular application", new Date(2022,8,28)),
    new Topic(3, "Directives","Angular syntax on the html that changes the behavior of html element", new Date(2022,9, 15)),
    new Topic(4, "Template", "It refers to the html file with angular directs in it", new Date(2022,5,2)),
    new Topic(5, "Module", "It helps to logically group components", new Date(2022,6,22))
  ]