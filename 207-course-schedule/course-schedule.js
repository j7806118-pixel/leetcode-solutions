function canFinish(numCourses, prerequisites) {
    const graph = Array.from(
        { length: numCourses },
        () => []
    );

    // Build directed graph
    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
    }

    // 0 = unvisited
    // 1 = visiting
    // 2 = processed
    const state = new Array(numCourses).fill(0);

    function dfs(course) {

        // Cycle detected
        if (state[course] === 1) {
            return false;
        }

        // Already processed
        if (state[course] === 2) {
            return true;
        }

        // Mark as currently visiting
        state[course] = 1;

        // Visit all dependent courses
        for (const nextCourse of graph[course]) {

            if (!dfs(nextCourse)) {
                return false;
            }
        }

        // Finished exploring this course
        state[course] = 2;

        return true;
    }

    // Check every course
    for (let course = 0; course < numCourses; course++) {

        if (!dfs(course)) {
            return false;
        }
    }

    return true;
}