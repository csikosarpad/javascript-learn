export const dataSet = {
    "value":{
        "name":"James Smith",
        "salary":15
    },
    "leftChild":{
        "value":{
            "name":"John Johnson",
            "salary":10
        },
        "leftChild":{
            "value":{
                "name":"Mary Williams",
                "salary":7
            },
            "leftChild":{
                "value":{
                    "name":"Patricia Brown",
                    "salary":5
                }
            },
            "rightChild":{
                "value":{
                    "name":"Michael Miller",
                    "salary":9
                }
            }
        },
        "rightChild":{
            "value":{
                "name":"Richard Davis",
                "salary":13
            }
        }
    },
    "rightChild":{
        "value":{
            "name":"Charles Garcia",
            "salary":25
        },
        "leftChild":{
            "value":{
                "name":"Linda Rodriguez",
                "salary":22
            },
            "leftChild":{
                "value":{
                    "name":"Susan Wilson",
                    "salary":17
                }
            }
        },
        "rightChild":{
            "value":{
                "name":"Dorothy Martin",
                "salary":27
            }
        }
    },
    "_string":[
        "       15       ",
        "      /  \\     ",
        "     10   25    ",
        "    / \\   / \\ ",
        "   7  13 22  27 ",
        "  / \\    /     ",
        " 5   9  17      "
    ],
    "_string":[
        "          Charles 25       ",
        "      /                \\     ",
        "     James 15         Dorothy 27    ",
        "    /                  / ",
        "   John 10       Linda 22 ",
        "  /       \\          /     ",
        " Mary 7  Mick 9  Susan 17      ",
        "  /        \\                  ",
       " Patr 5    Rich 13              "
    ],
};
