// module.exports = function(grunt) {
//     grunt.initConfig({
//         pkg: grunt.file.readJSON('package.json'),

//         less: {
//             development: {
//                 files: {
//                     'dev/styles/main.css': 'src/styles/main.less'
//                 }
//             },
//             production: {
//                 options: {
//                     compress: true,
//                 },
//                 files: {
//                     'dist/styles/main.min.css': 'src/styles/main.less'
//                 }
//             }
//         },
//         watch: {
//             less: {
//                 files: ['src/styles/**/*.less'],
//                 tasks: ['less:development']
//             },
//             html: {
//                 files: ['src/index.html'],
//                 tasks: ['replace:dev']
//             },
//             images: {
//                 files: ['src/imgs/*'],
//                 tasks: ['copy:images']
//             },
//             js: {
//                 files: ['src/scripts/*'],
//                 copy: ['copy:js']
//             }
//         },
//         replace: {
//             dev: {
//                 options: {
//                     patterns: [
//                         {
//                             match: 'ADDRESS_CSS',
//                             replacement: './styles/main.css'
//                         },
//                         {
//                             match: 'ADDRESS_JS',
//                             replacement: './src/scripts/main.js'
//                         }
//                     ]
//                 },
//                 files: [ 
//                     {
//                     expand: true,
//                     flatten: true,
//                     src: ['src/index.html'],
//                     dest: 'dev/'
//                     }
//                 ]
//             },
//             dist: {
//                 options: {
//                     patterns: [
//                         {
//                             match: 'ADDRESS_CSS',
//                             replacement: './styles/main.min.css'
//                         },
//                         {
//                             match: 'ADDRESS_JS',
//                             replacement: './scripts/main.min.js'
//                         }
//                     ]
//                 },
//                 files: [
//                     {
//                         expand: true,
//                         flatten: true,
//                         src: ['prebuild/index.html'],
//                         dest: 'dev/'
//                     }
//                 ]
//             }
//         },
//         htmlmin: {
//             dist: {
//                 options: {
//                     removeComments: true,
//                     collapseWhitespace: true,
//                 },
//                 files: {
//                     'prebuild/index.html': 'src/index.html'
//                 }
//             }
//         },
//         clean: ['prebiuld'],
//         copy: {
//             images: {
//                 expand: true,
//                 cwd: 'src/imgs',
//                 src: '**/*',
//                 dest: 'dev/imgs/'
//             },
//             js: {
//                 expand: true,
//                 cwd: 'src/scripts',
//                 src: '**/*',
//                 dest: 'dev/scripts/'
//             }
//         },
//         uglify: {
//             target: {
//                 files: {
//                     'dist/scripts/main.min.js': 'src/scripts/main.js'
//                 }
//             }
//         }
//     });

//     grunt.loadNpmTasks('grunt-contrib-less');
//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.loadNpmTasks('grunt-replace');
//     grunt.loadNpmTasks('grunt-contrib-htmlmin');
//     grunt.loadNpmTasks('grunt-contrib-clean')
//     grunt.loadNpmTasks('grunt-contrib-copy');
//     grunt.loadNpmTasks('grunt-contrib-uglify');

//     grunt.registerTask('default', ['watch']);
//     grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify'])
// }

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            },
            images: {
                files: ['src/imgs/*'],
                tasks: ['copy:images']
            },
            js: {
                files: ['src/scripts/*'],
                copy: ['copy:js']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ADDRESS_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ADDRESS_JS',
                            replacement: './src/scripts/main.js'
                        }
                    ]
                },
                files: [ 
                    {
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ADDRESS_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ADDRESS_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        copy: {
            images: {
                expand: true,
                cwd: 'src/imgs',
                src: '**/*',
                dest: 'dev/imgs/'
            },
            js: {
                expand: true,
                cwd: 'src/scripts',
                src: '**/*',
                dest: 'dev/scripts'
            },
            dist: {
                expand: true,
                cwd: 'src/imgs',
                src: '**/*',
                dest: 'dist/imgs'
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'copy:dist', 'replace:dist', 'clean', 'uglify']);
};
