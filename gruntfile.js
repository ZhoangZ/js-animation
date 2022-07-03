module.exports = function (grunt) {
   grunt.initConfig({     

      copy: {        
         toScr: {
            files: [{ 
               expand: true, 
               cwd: ".",
               src: "lib/**", 
               dest: 'build/'
               
            },
            { 
               expand: true, 
               src: "package.json", 
               dest: 'build/'
               
            }]
         }
      },     

      clean: {
         options: { "no-write": false },
         folders: ["build/"],
      }
   })

   grunt.loadNpmTasks("grunt-contrib-clean")
   grunt.loadNpmTasks("grunt-contrib-copy")  
   grunt.registerTask("default", ["clean","copy:toScr"])
}
