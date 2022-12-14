/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

export const authSettings = {
  guest: {},
  role: {
    parent: "user",
    full: ["all"],
    view: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    update: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    create: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    delete: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    review:["profile"],
    transfer: ["profile"],
    scan:["profile"],
    return:["profile"],
  }, 
  user: {
    parent: "guest",
    view: ["current-user", "orders", "department", "customer", "profile"],
    edit: ["current-user", "orders", "department"],
  },
  admin: {
    parent: "user",
    full: ["all"],
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
      "config",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
      "logs",
      "config",
    ],
  },
  role_user: {
    parent: "guest",
    // view: ['current-user', 'orders', 'department', 'customer', 'profile'],
    // edit: ['current-user', 'orders', 'department'],
    view: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "departments",
      "action-log",
      "customers",
      "profile",
      "websocket",
    ],
    edit: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "departments",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    create: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "departments",
      "action-log",
      "customers",
      "profile",
      "websocket",
    ]
  },
  role_admin: {
    parent: "user",
    full: ["all"],
    view: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    edit: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    create: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    delete: [
      "dashboard",
      "staffContact",
      "transactionType",
      "profileList",
      "option-set",
      "user",
      "role",
      "department",
      "action-log",
      "customer",
      "profile",
      "websocket",
    ],
    review:["profile"]
  },
  qttd: {
    parent: "user",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  ld_qttd: {
    parent: "qttd",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  pgd_qttd: {
    parent: "qttd",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  qlkh: {
    parent: "user",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  ld_qlkh: {
    parent: "qlkh",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  pgd_qlkh: {
    parent: "qlkh",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  gdkh: {
    parent: "user",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  ld_gdkh: {
    parent: "gdkh",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
  pdg_gdkh: {
    parent: "gdkh",
    view: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    edit: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    create: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
    delete: [
      "current-user",
      "orders",
      "users",
      "department",
      "customer",
      "profile",
    ],
  },
};
