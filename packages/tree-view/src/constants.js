import React from "react";
import {
  AddFolder24,
  Folder24,
  Calendar24,
  ProductsAndServices24,
  Report24,
  FileImage24,
  FileVideo24,
  AddFolder16,
  Folder16,
} from "@hig/icons";

export const indicators = Object.freeze({
  CARET: "caret",
  OPERATOR: "operator",
});

export const AVAILABLE_INDICATORS = Object.freeze(Object.values(indicators));

export const FileTreeCollection = {
  id: 1,
  index: 0,
  parentId: null,
  meta: {
    label: "Tree Item 1",
    collapsed: false,
    active: false,
    disabled: false,
    icon: <Report24 />,
  },
  children: [
    {
      id: 2,
      index: 1,
      parentId: 1,
      meta: {
        label: "Tree Item 2",
        collapsed: false,
        active: false,
        disabled: false,
        icon: <Folder24 />,
      },
      children: [
        {
          id: 3,
          index: 2,
          parentId: 2,
          meta: {
            label: "Tree Item 3",
            collapsed: false,
            active: false,
            disabled: false,
            icon: <Calendar24 />,
          },
        },
        {
          id: 4,
          index: 3,
          parentId: 2,
          meta: {
            label: "Tree Item 4",
            collapsed: false,
            active: false,
            disabled: false,
            icon: <FileImage24 />,
          },
        },
        {
          id: 5,
          index: 4,
          parentId: 2,
          meta: {
            label: "Tree Item 5",
            collapsed: false,
            active: false,
            disabled: false,
            icon: <ProductsAndServices24 />,
          },
          children: [
            {
              id: 6,
              index: 5,
              parentId: 5,
              meta: {
                label: "Tree Item 6",
                collapsed: false,
                active: false,
                disabled: false,
                icon: <AddFolder24 />,
              },
            },
            {
              id: 7,
              index: 6,
              parentId: 5,
              meta: {
                label: "Tree Item 7",
                collapsed: false,
                active: false,
                disabled: false,
                icon: <Report24 />,
              },
              children: [
                {
                  id: 8,
                  index: 7,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 8",
                    collapsed: false,
                    active: false,
                    disabled: false,
                    icon: <ProductsAndServices24 />,
                  },
                },
                {
                  id: 9,
                  index: 8,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 9",
                    collapsed: false,
                    active: false,
                    disabled: false,
                    icon: <FileImage24 />,
                  },
                },
                {
                  id: 10,
                  index: 9,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 10",
                    collapsed: false,
                    active: false,
                    disabled: false,
                    icon: null,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 11,
      index: 10,
      parentId: 1,
      meta: {
        label: "Tree Item 11",
        collapsed: false,
        active: false,
        disabled: false,
        icon: <Folder24 />,
      },
      children: [
        {
          id: 12,
          index: 11,
          parentId: 11,
          meta: {
            label: "Tree Item 12",
            collapsed: false,
            active: false,
            disabled: false,
            icon: null,
          },
        },
        {
          id: 13,
          index: 12,
          parentId: 11,
          meta: {
            label: "Tree Item 13",
            collapsed: false,
            active: false,
            disabled: false,
            icon: <FileImage24 />,
          },
        },
        {
          id: 14,
          index: 13,
          parentId: 11,
          meta: {
            label: "Tree Item 14",
            collapsed: false,
            active: false,
            disabled: false,
            icon: <Calendar24 />,
          },
        },
        {
          id: 15,
          index: 14,
          parentId: 11,
          meta: {
            label: "Tree Item 15",
            collapsed: false,
            active: false,
            disabled: false,
            icon: <ProductsAndServices24 />,
          },
          children: [
            {
              id: 16,
              index: 15,
              parentId: 15,
              meta: {
                label: "Tree Item 16",
                collapsed: false,
                active: false,
                disabled: false,
                icon: <FileVideo24 />,
              },
            },
            {
              id: 17,
              index: 16,
              parentId: 15,
              meta: {
                label: "Tree Item 17",
                collapsed: false,
                active: false,
                disabled: false,
                icon: <Calendar24 />,
              },
            },
            {
              id: 18,
              index: 17,
              parentId: 15,
              meta: {
                label: "Tree Item 18",
                collapsed: false,
                active: false,
                disabled: false,
                icon: <ProductsAndServices24 />,
              },
            },
          ],
        },
      ],
    },
    {
      id: 19,
      index: 18,
      parentId: 1,
      meta: {
        label: "Tree Item 19",
        collapsed: false,
        active: false,
        disabled: false,
        icon: <FileImage24 />,
      },
    },
    {
      id: 20,
      index: 19,
      parentId: 1,
      meta: {
        label: "Tree Item 20",
        collapsed: false,
        active: false,
        disabled: false,
        icon: <Calendar24 />,
      },
    },
  ],
};
