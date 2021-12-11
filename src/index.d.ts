declare module "*.pug" {
    function templateCompile(props?: any): string;
    export default templateCompile;
}