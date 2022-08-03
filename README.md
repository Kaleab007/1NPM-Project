# NPM-Project

1. Set up Your npm Project
‏The first thing to do is to set up an npm project. Let's call it tspractice.

The next thing to install is TypeScript. TypeScript is installed from npm. Since JavaScript is the result of compilation, TypeScript and all related tools are devDependencies. They can be saved as such or as dependencies if your preference is to not distinguish between the two.

Once we have our dependencies, we have a little setup work before getting to our code. First, let's add a script to our package.json. The script will be used to transpile our TypeScript to JavaScript based on the settings we are about to create.



2. Write the Code



Once we have our configurations set, we can get into our code. All TypeScript files will end with the extension .ts or .tsx when using JSX. If you are working on a project that you are converting to TypeScript slowly, you can also have .js files in your src folder. TypeScript can transpile these from ES* to an older version if that is what is stated in your configuration file but to do so, you would want to ensure allowJs is set to true: "allowJs": true.

Let's start with an index.ts file. Copy the following code and paste it into your project.




3. Bonus

Add additional variables and functions using the primitive types of string, number, boolean. Try incorrectly typing variables, parameters, and return types to see what errors TypeScript gives you. Then, correct those errors.
