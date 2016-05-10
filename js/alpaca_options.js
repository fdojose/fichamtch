var misOpciones={
    "fields":{
      "_id":{
        "hidden":true
      },
      "_rev":{
        "hidden":true
      },
      "terapeuta":{
        "hidden":true
      },
      "propietarios":{
      },
      "datosContacto":{
        "collapsible":true,
        "collapsed": true,
      },
      "historia":{
        "fields":{
          "hipertension":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             },
          },
          "tiroidismo":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "diabetes":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "ets":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "hepatitis":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "cancer":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "cirugias":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "otras":{
            "collapsible":true,
            "collapsed": true,
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          }

        }
      },
      "familia":{
        "collapsible":true,
        "collapsed": true,
        "fields":{
          "pareja":{
            "type": "radio",
            "vertical":false
          },
          "convive":{
            "type": "radio",
            "vertical":false
          },
          "hijos":{
            "type": "radio",
            "vertical":false
          }
        }
      },
      "ocupacion":{
        "collapsible":true,
        "collapsed": true,
      },
      "tratamientos":{
        "actionbar": {
          "showLabels": true,
          "actions": [{
              "label": "Nuevo Tratamiento",
              "action": "add"
          }, {
              "label": "Eliminar Tratamiento",
              "action": "remove"
          }, {
              "label": "Movin' on up",
              "action": "up",
              "enabled": false
          }, {
              "label": "Get down",
              "action": "down",
              "enabled": false
          }]
      },
          "fields":{
            "item":{ //tratamientos_0_habitos_sueño_concilacion
              "fields":{
                "descripcion":{//funciona //tratamientos_0_motivo
                      "type": "textarea",
                      "rows": 5,
                      "cols": 40,
                      "helper": "Por favor ingrese el motivo principal de su consulta actual."
                 },
                 "diagnosticoOccidental":{//funciona
                       "helper": "Por favor ingrese el diagn&oacute;stico occidental, si lo hubiese."
                  },
                "medicamentos":{
                  "collapsible":true,
                  "collapsed": true,
                  "type":"table"
                },
                 "habitos":{
                   "fields":{
                     "drogas":{
                       "collapsible":true,
                       "collapsed": true,
                       "type":"table"
                     },
                     "ejercicio":{
                       "collapsible":true,
                       "collapsed": true,
                     },
                     "sueno":{ //funciona
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "concilacion":{
                           "type": "radio",
                           "vertical":false
                         },
                         "calidad":{
                           "type":"radio",
                           "vertical":false
                         },
                         "tipo":{
                           "type":"radio",
                           "vertical":false
                         },
                         "suenos":{
                           "type":"radio",
                           "vertical":false
                         },
                       }
                     }
                   }
                 }, //tratamientos_0_sintomas_oido_vertigo
                 "sintomas":{
                   "fields":{
                     "dolores":{
                       "collapsible":true,
                       "collapsed": true,
                     },
                     "emociones":{
                       "collapsible":true,
                       "collapsed": true,
                     },
                     "oido":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "vertigo":{
                           "type":"radio",
                           "vertical":false
                         },
                         "tinitus":{
                           "type":"radio",
                           "vertical":false
                         }
                       }
                     },
                     "ojos":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "lagrimas":{
                           "type":"radio",
                           "vertical":false
                         },
                         "secreciones":{
                           "type":"radio",
                           "vertical":false
                         }
                       }
                     },//tratamientos_0_sintomas_cardiovacular_circulatorio
                     "cardiovascular":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "circulatorio":{
                           "type":"checkbox"
                         },
                         "corazon":{
                           "type":"checkbox"
                         }
                       }
                     },
                     "digestion":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "labios":{
                           "type":"checkbox"
                         },
                         "encias":{
                           "type":"checkbox"
                         },
                         "nauceas":{
                           "type":"checkbox"
                         },
                         "sensacionAbdominal":{
                           "type":"checkbox"
                         },
                         "vomitos":{
                           "type":"radio",
                           "vertical":false
                         },
                         "acidez":{
                           "type":"radio",
                           "vertical":false
                         },
                         "liquidos":{
                           "fields":{
                             "preferencia":{
                               "type":"radio",
                               "vertical":false
                             }
                           }
                         },
                         "orina":{
                           "collapsible":true,
                           "collapsed": true,
                           "fields":{
                             "sensaciones":{
                               "type":"radio",
                               "vertical":false
                             },
                             "frecuencia":{
                               "type":"radio",
                               "vertical":false
                             }
                           }
                         },
                         "evacuaciones":{
                           "collapsible":true,
                           "collapsed": true,
                           "fields":{
                             "olor":{
                               "type":"radio",
                               "vertical":false
                             },
                             "hemorroides":{
                               "type":"radio",
                               "vertical":false
                             }
                           }
                         } //tratamientos_0_sintomas_digestion_evacuaciones_olor
                       }
                     },
                     "respiratorio":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "nariz":{
                           "collapsible":true,
                           "collapsed": true,
                           "fields":{
                             "obstruccion":{
                               "type":"radio",
                               "vertical":false
                             },
                             "mucosidad":{
                               "type":"checkbox"

                             },
                             "olores":{
                               "type":"radio",
                               "vertical":false
                             },
                             "epistaxis":{ //tratamientos_0_sintomas_respiratorio_respiracion_intensidad
                               "type":"radio",
                               "vertical":false
                             }
                           }
                         },
                         "faringeLaringe":{
                           "collapsible":true,
                           "collapsed": true,
                         },
                         "respiracion":{
                           "collapsible":true,
                           "collapsed": true,
                           "fields":{
                             "intensidad":{
                               "type":"radio",
                               "vertical":false
                             }
                           }
                         },
                         "tos":{
                           "collapsible":true,
                           "collapsed": true,
                           "fields":{
                             "expectoracion":{
                               "type":"checkbox"
                             },
                             "hora":{
                               "type":"checkbox"
                             }
                           }
                         }
                       }
                     },
                     "reproductor":{
                       "fields":{
                         "menstruacion":{
                           "collapsible":true,
                           "collapsed": true,
                         },
                         "sexuales":{
                           "collapsible":true,
                           "collapsed": true,
                         }
                       }
                     }
                   }
                 },
                 "signos":{
                   "fields":{
                     "vitalidad":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "emocion":{
                           "type":"checkbox",
                           "fieldClass":"ficha-checkbox"
                         }
                       }
                     },
                     "temperatura":{
                       "collapsible":true,
                       "collapsed": true,
                     },
                     "piel":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "piel":{
                           "type":"checkbox",
                           "fieldClass":"ficha-checkbox"
                         },
                         "unas":{
                           "type":"checkbox",
                           "fieldClass":"ficha-checkbox"
                         },
                         "pelo":{
                           "type":"checkbox",
                           "fieldClass":"ficha-checkbox"
                         }
                       }
                     },
                     "sudor":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "tipo":{
                           "type":"checkbox"
                         },
                         "localizacion":{
                           "type":"checkbox"
                         }
                       }
                     },
                     "palpacion":{
                       "collapsible":true,
                       "collapsed": true,
                     },
                     "cabeza":{
                       "collapsible":true,
                       "collapsed": true,
                       "fields":{
                         "dolor":{
                           "fields":{
                             "intensidad":{
                               "type":"radio",
                               "vertical":false
                             },
                             "periodo":{
                               "type":"radio",
                               "vertical":false
                             },
                             "tipo":{
                               "type":"radio",
                               "vertical":false
                             }
                           }
                         }
                       }
                     }
                   }
                 },
                 "sesiones":{//tratamientos_0_sesiones_0_pulsoDerecho_profundidad, funciona
                   "toolbarSticky": true,
                     "items":{ //tratamientos_0_sesiones_0_evolucion_evolucionPrincipal
                       "fields":{
                        "pulso":{
                           "type":"table"
                          },
                        "acupuntura":{
                          "toolbarSticky": true,
                          "actionbarStyle":"bottom",
                          "type": "table",
                             "items":{
                               "fields":{
                                 "nombre":{
                                   "type":"text",
                                   "events":{
                                     "focus":function(){ //antes no funcionaba ahora si
                                       //alert("Tomando el foco");
                                     },
                                     "click":function(){ //funciona

                                       //alert(divDisplay);
                                     }

                                   },
                                   //"fieldClass":"dropdown",
                                   /*"fieldClass":"js-example-data-array" Select2 no funciona, no se rellena el campo */

                                   //aqui se comenta el typeahead
                                   "typeahead": {
                                     "config": {
                                       //"autoselect": true,
                                       "highlight": true,
                                       //"hint": true,
                                       "minLength": 1
                                       },
                                     "datasets": {
                                           "display":'value',
                                           //"source": substrMatcher(lpuntos),
                                           "type": "local",
                                           "async":true,
                                           "source":function(query) { //

                                                var companies = lpuntos;
                                                var results = [];

                                                for (var i = 0; i < companies.length; i++) {
                                                    var add = true;
                                                    if (query) {
                                                        add = (companies[i].indexOf(query) === 0);
                                                    }
                                                    if (add) {
                                                        results.push({
                                                            "value": companies[i]
                                                        });
                                                    }
                                                }
                                                return results;
                                            },

                                           //"type":"prefetch",
                                           //"source":"data/puntos.json",
                                           "templates": {
                                             "suggestion": "<p style='color: blue'>{{value}}</p>"
                                           }
                                       }
                                 }//typeahead */
                               },
                               "zona":{
                                 "type":"select"
                               },
                               "accion":{
                                 "type":"radio",
                                 "vertical":false
                               },
                               "tecnica":{
                                 "type":"select"
                               }
                               }
                             }

                        },
                        "evolucion":{
                          "fields":{
                            "detalle":{ //tratamientos_0_sesiones_0_evolucion_detalle, funciona
                              "type": "textarea",
                              "rows": 3,
                              "cols": 20
                            },
                            "evolucionPrincipal":{
                              "type":"radio",
                              "vertical":false
                            },
                            "evolucionSecundaria":{
                              "type":"radio",
                              "vertical":false
                            } //tratamientos_0_medicamentos_0_nombre
                          }
                        }
                       }
                     }
                 }
               }
           }
         }
    },
      "talla":{
        "type":"text",
        "size":4
      }
   }
 };
