
export const menuData = [
    // 有子菜单 字菜单不分组的
    {
        optionName: "系统设置",
        iconClassName: "el-icon-setting",
        index: '1',
        disabled: false, // 是否禁用
        childList: [
            {
                optionName: 'test',
                index: '1-1',
                routerName: "test"
            },
            {
                optionName: 'test1',
                index: '1-2',
                routerName: "test1"
            },
            {
                optionName: 'test2',
                index: '1-3',
                routerName: "test2"
            },
            {
                optionName: 'test3',
                index: '1-4',
                routerName: "test3"
            }
        ]
    }
    
]

// export default {menuData}




/* 菜单配置 描述 */
export const menuData描述 = [
    // 有子菜单 并且字菜单分组的
    {
        optionName: "导航一", // 一级菜单名
        iconClassName: "aaa", // element-ui图标名
        index: '1', // 唯一标志
        childList: [ // 分组的
            {
                groupName: '组名一',
                index: '1-1-1',
                list: [
                    {
                        optionName: '选项1',
                        routerName: "home"
                    },
                    {}
                ],
            },
            {
                groupName: '组名二',
                index: '1-1-2',
                list: [
                    {
                        optionName: '选项1',
                        routerName: "home"
                    },
                    {}
                ],
            }
        ],
    },
    // 有子菜单 字菜单不分组的
    {
        optionName: "导航二",
        iconClassName: "el-icon-menu",
        index: '2',
        disabled: false, // 是否禁用
        childList: [ // 不分组的
            {
                optionName: '选项1',
                index: '2-1',
                routerName: "home"
            },
            {}
        ]
    },
    // 无子菜单的
    {
        optionName: "导航三",
        iconClassName: "el-icon-document",
        routerName: "home",
        index: '3',
        disabled: false
    },
    
    "导航四"
]

