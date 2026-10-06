function findOrder(numCourses, prerequisites) {
    const graph = Array.from(
        { length: numCourses },
        () => []
    );

    const indegree = new Array(numCourses).fill(0);

    // Build graph and indegree
    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
        indegree[course]++;
    }

    const queue = [];

    // Courses with no prerequisites
    for (let course = 0; course < numCourses; course++) {
        if (indegree[course] === 0) {
            queue.push(course);
        }
    }

    const result = [];
    let index = 0;

    // BFS
    while (index < queue.length) {
        const course = queue[index];
        index++;

        result.push(course);

        // Remove this course as a prerequisite
        for (const nextCourse of graph[course]) {
            indegree[nextCourse]--;

            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    // Cycle exists if we couldn't process every course
    if (result.length !== numCourses) {
        return [];
    }

    return result;
}  