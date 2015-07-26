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
      "historia":{
        "fields":{
          "hipertension":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             },
             "collapsible":true,
             "collapsed": true
          },
          "tiroidismo":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "diabetes":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "ets":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "hepatitis":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "cancer":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "cirugias":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          },
          "otras":{
             "fields":{
               "sino":{
                 "type": "radio",
                 "vertical":false
               }
             }
          }

        }
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
                  "type":"table"
                },
                 "habitos":{
                   "fields":{
                     "drogas":{
                       "type":"table"
                     },
                     "sueno":{ //funciona
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
                     "oido":{
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
                       "fields":{
                         "nariz":{
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
                         "respiracion":{
                           "fields":{
                             "intensidad":{
                               "type":"radio",
                               "vertical":false
                             }
                           }
                         },
                         "tos":{
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

                     }
                   }
                 },
                 "signos":{
                   "fields":{
                     "emociones":{
                       "fields":{
                         "emocion":{
                           "type":"checkbox",
                           "fieldClass":"ficha-checkbox"
                         }
                       }
                     },
                     "piel":{
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
                       "fields":{
                         "tipo":{
                           "type":"checkbox"
                         },
                         "localizacion":{
                           "type":"checkbox"
                         }
                       }
                     },
                     "cabeza":{
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
                                     "focus":function(){ //no parece funcionar
                                       alert("Tomando el foco");
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
