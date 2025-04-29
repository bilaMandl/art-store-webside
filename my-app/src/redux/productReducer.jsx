import { produce } from "immer"
export const InitialState = {
    productList: [
        { code: 1, name: "מרקר", nameGroup:"מכשירי כתיבה", idGroup: 1, price: 59, src: "art/marker.jpg", count: 30 },
        { code: 2, name: "סרגל", nameGroup: "מכשירי כתיבה", idGroup: 1, price: 4, src: "art/333.jpg", count: 40 },
        { code: 3, name: " סט פנטונים", nameGroup: "מכשירי כתיבה", idGroup: 3, price: 108, src: "art/122.jpg", count: 37 },
        { code: 4, name: "גואש לבן", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/White gouache.jpg", count: 39 },
        { code: 5, name: "גואש אדום", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/red gouache.jpg", count: 34 },
        { code: 6, name: "גואש ירוק", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/green gouache.jpg", count: 50 },
        { code: 7, name: "גואש צהוב", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/Yellow gouache.jpg", count: 60 },
        { code: 8, name: "גואש תכלת", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/Light blue gouache.jpg", count: 89 },
        { code: 9, name: "גואש ורוד", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/pink gouache.jpg", count: 45 },
        { code: 10, name: "גואש חום", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/Brown gouache.jpg", count: 32 },
        { code: 12, name: "גואש סגול", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 8, src: "art/Purple gouache.jpg", count: 30 },
        { code: 13, name: "סט גואש 5 יחידות של טאלנס", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 69, src: "art/Gouache set 5 pieces by Talens.jpg", count: 20 },
        { code: 14, name: "מספריים", nameGroup: "מכשירי כתיבה", idGroup: 3, price: 59, src: "art/Scissors.jpg", count: 110 },
        { code: 15, name: "מחדד", nameGroup: "מכשירי כתיבה", idGroup: 3, price: 19, src: "art/sharpener.jpg", count: 20 },
        { code: 16, name: "מחוגה", nameGroup: "מכשירי כתיבה", idGroup: 3, price: 42, src: "art/compasses.jpg", count: 5 },
        { code: 17, name: "דבק חם", nameGroup: "מכשירי כתיבה", idGroup: 3, price: 59, src: "art/hatGlue.jpg", count: 50 },
        { code: 18, name: "צבעי פסטל יבש", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 21, src: "art/Dry pastel.jpg", count: 24 },
        { code: 19, name: "מרקרים דו כיוניים", nameGroup: "מכשירי כתיבה", idGroup: 3, price: 43, src: "art/Bidirectional pens.jpg", count: 70 },
        { code: 20, name: "צבעי קרש", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 1250, src: "art/222.jpg", count:  4},
        { code: 20, name: "פרחי סבא", nameGroup: "יצירות", idGroup: 2, price: 1230, src: "aa/111.jpg", count:4  },
        { code: 20, name: "פרחים ברקע השקעיה", nameGroup: "יצירות", idGroup: 2, price: 2030, src: "aa/88.jpg", count: 14 },
        { code: 20, name: "צבעי פנדה", nameGroup: "צבעים ומכחולים", idGroup: 1, price:44 , src: "art/96.jpg", count: 22 },
        { code: 20, name: "סט עטים", nameGroup: "מכשירי כתיבה", idGroup: 3, price: 32, src: "art/85.jpg", count:  12},
        { code: 20, name: "כן ציור", nameGroup: "כני ציור וקנווסים ניירות ובלוקים", idGroup:4 , price:70 , src: "art/76.jpg", count: 5 },
        { code: 20, name: " טושים אלכוהליים", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 140, src: "art/120.jpg", count: 5 },
        { code: 20, name: "מעמד לציור", nameGroup: "כני ציור וקנווסים ניירות ובלוקים", idGroup: 3, price:1485 , src: "art/54.jpg", count:4  },
        { code: 20, name: "סט טושים אלכוהלים 168", nameGroup: "צבעים ומכחולים", idGroup: 1, price: 225, src: "art/41.jpg", count:  7},
        { code: 20, name: "בלוק ציור", nameGroup: "כני ציור וקנווסים ניירות ובלוקים", idGroup: 3, price: 33, src: "art/65.jpg", count: 50 },
        { code: 20, name: "בלוק נייר עתון", nameGroup: "כני ציור וקנווסים ניירות ובלוקים", idGroup: 3, price: 9, src: "art/17.jpg", count: 15 },
        { code: 20, name: "קנבסים", nameGroup: "כני ציור וקנווסים ניירות ובלוקים", idGroup: 3, price: 45, src: "art/33.jpg", count: 33 },
        { code: 20, name: "טפיפות צבע", nameGroup: "יצירות", idGroup:2 , price: 1600, src: "aa/16.jpg", count:3  },
        { code: 20, name: "מזמור לתודה", nameGroup: "יצירות", idGroup:2 , price: 1240, src: "aa/15.jpg", count: 2 },
        { code: 20, name: "משיכות עיגוליות", nameGroup: "יצירות", idGroup: 2, price: 1200, src: "art/100.jpg", count:4  },
        { code: 20, name: "שמחתי באומר לי", nameGroup: "יצירות", idGroup: 2, price: 5000, src: "aa/2.jpg", count: 1 },
        { code: 20, name: "אם אמרתי", nameGroup: "יצירות", idGroup:2 , price: 900, src: "aa/14.jpg", count:5  },
        { code: 20, name: "תוכי מושפרץ", nameGroup: "יצירות", idGroup: 2, price: 2300, src: "aa/33.jpg", count: 2 },
        { code: 20, name: "עיר דוד מוכתם", nameGroup: "יצירות", idGroup: 2, price: 2100, src: "aa/34.jpg", count:  3},
        { code: 20, name: "צבעי מים סן פרטרבורג", nameGroup: "צבעים ומכחולים", idGroup:1 , price:490 , src: "art/12.jpg", count:  12},
        { code: 20, name: "מכחולים מניפה ", nameGroup: "צבעים ומכחולים", idGroup:1 , price: 15, src: "art/41.jpg", count:13  },
        { code: 20, name: "מכחולים שטוחים", nameGroup: "צבעים ומכחולים", idGroup:1 , price: 13, src: "art/71.jpg", count:  34},
        { code: 20, name: "מכחולים עיגולים", nameGroup: "צבעים ומכחולים", idGroup: 1, price:10 , src: "art/8.jpg", count:24  },

    ],
    groupList: [
        { code: 1, name: "צבעים ומכחולים" },
        { code: 2, name: "יצירות" },
        { code: 3, name: "מכשירי כתיבה" },
        { code: 4, name: "כני ציור וקנווסים ניירות ובלוקים" }
    ],
    code: 40,
    codeGroup: 5
}
export const ProductReducer = produce((state, action) => {
    switch (action.type) {
        case "ADD_GROUP": {
            state.groupList.push(action.payload)
            state.codeGroup += 1
            break
        }
        case "EDIT_GROUP": {
            state.groupList.find(x => x.code == action.payload.code).name = action.payload.name
            break;
        };
        case "ADD_PRODUCT": {
            console.log("1")
            state.productList.push(action.payload)
            state.code += 1
            break
        }
        case "EDIT_PRODUCT": {
            let pro = state.productList.find(x => x.code == action.payload.code)
            pro.name = action.payload.product.name
            pro.nameGroup = action.payload.product.nameGroup
            pro.idGroup = action.payload.product.idGroup
            pro.price = action.payload.product.price
            pro.src = action.payload.product.src
            pro.count = action.payload.product.count
            break;
        };
        case "REMOVE_PRODUCT": {
            let product = state.productList
            for (let index = 0; index < product.length; index++) {
                if (product[index].code == action.payload) {
                    product.splice(index, 1)
                }
            }
            break;
        };
        default:
            break;
    }
}, InitialState)