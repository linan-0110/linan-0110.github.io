
export const menuData = [
    // 有子菜单 字菜单不分组的
    {
        optionName: "档案管理",
        iconClassName: "el-icon-setting",
        index: '1',
        disabled: false, // 是否禁用
        childList: [
            {
                optionName: '企业信息',
                index: '1-1',
                routerName: "aa"
            },
            {
                optionName: '牧场信息',
                index: '1-2',
                routerName: "aa"
            },
            {
                optionName: '猪舍信息',
                index: '1-3',
                routerName: "aa"
            },
            {
                optionName: '人员信息',
                index: '1-4',
                routerName: "aa"
            }
            
        ]
    },
    
    {
        optionName: "群体管理",
        iconClassName: "el-icon-s-flag",
        index: '2',
        disabled: false,
        childList: [ 
            {
                optionName: '群体档案',
                index: '2-1',
                routerName: "GroupRecord"
            },
            {
                optionName: '健康分析',
                index: '2-2',
                routerName: "aa"
            },
            {
                optionName: '转群记录',
                index: '2-3',
                routerName: "aa"
            },
            {
                optionName: '群体盘点',
                index: '2-4',
                routerName: "aa"
            }
        ]
    },
    // 无子菜单的
    {
        optionName: "个体管理",
        iconClassName: "el-icon-message",
        index: '3',
        disabled: false,
        childList: [ 
            {
                optionName: '种猪档案',
                index: '3-1',
                routerName: "aa"
            },
            {
                optionName: '个体追踪',
                index: '3-2',
                routerName: "UnityTrace"
            }
            
            
        ]
    },
    {
        optionName: "系统配置",
        iconClassName: "el-icon-coordinate",
        index: '4',
        disabled: false,
        childList: [ 
            {
                optionName: '设备配置',
                index: '4-1',
                routerName: "aa"
            },
            {
                optionName: '软件设置',
                index: '4-2',
                routerName: "aa"
            },
            {
                optionName: '角色设置',
                index: '4-3',
                routerName: "aa"
            },
            {
                optionName: '权限管理',
                index: '4-4',
                routerName: "aa"
            }
        ]
    },
    {
        optionName: "系统设置",
        iconClassName: "el-icon-monitor",
        index: '5',
        disabled: false, // 是否禁用
        childList: [ 
            {
                optionName: '群体广播',
                index: '5-1',
                routerName: "aa"
            },
            {
                optionName: '设备配置',
                index: '5-2',
                routerName: "aa"
            },
            {
                optionName: '系统参数',
                index: '5-3',
                routerName: "aa"
            },
            {
                optionName: '角色配置',
                index: '5-4',
                routerName: "aa"
            },
            {
                optionName: '权限分配',
                index: '5-5',
                routerName: "aa"
            }
        ]
    },
    {
        optionName: "开发用模板",
        iconClassName: "el-icon-menu",
        index: '100',
        disabled: false, // 是否禁用
        childList: [ 
            {
                optionName: '模板 1',
                index: '100-1',
                routerName: "aa"
            },
            {
                optionName: '普通表格',
                index: '100-2',
                routerName: "ab"
            },
            {
                optionName: '模板 3',
                index: '100-3',
                routerName: "ac"
            },
            {
                optionName: '模板 4',
                index: '100-4',
                routerName: "ad"
            },
            {
                optionName: '模板 5',
                index: '100-5',
                routerName: "ee"
            },
            {
                optionName: '模板 6',
                index: '100-6',
                routerName: "af"
            }
            
        ]
    },
    
]

// export default {menuData}




/* 菜单配置 描述 */
const menuData描述 = [
    // 有子菜单 并且字菜单分组的
    {
        oneMenuName: "导航一", // 一级菜单名
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
        oneMenuName: "导航二",
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
        oneMenuName: "导航三",
        iconClassName: "el-icon-document",
        routerName: "home",
        index: '3',
        disabled: false
    },
    
    "导航四"
]


