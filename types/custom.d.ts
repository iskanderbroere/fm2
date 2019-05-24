/**
 * Fix module resolution of svg imports
 */
declare module "*.svg" {
  const content: any;
  export default content;
}
