export default function projectHasLinks(project: Project): boolean {
  return Boolean(project.appStore) ||
    Boolean(project.playStore) ||
    Boolean(project.repo) ||
    Boolean(project.testFlight) ||
    Boolean(project.website);
};