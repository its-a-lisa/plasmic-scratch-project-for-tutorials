// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7iJScHjybMvBcsDw91ght1
// Component: 7VOIeAEfhIHt

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_scratch_project_for_tutorials.module.css"; // plasmic-import: 7iJScHjybMvBcsDw91ght1/projectcss
import sty from "./PlasmicItem.module.css"; // plasmic-import: 7VOIeAEfhIHt/css

import SquaresvgIcon from "./icons/PlasmicIcon__Squaresvg"; // plasmic-import: aMra_7VYBJlG/icon
import SquareCheckFilledsvgIcon from "./icons/PlasmicIcon__SquareCheckFilledsvg"; // plasmic-import: Sm6FMvqIMiCf/icon

createPlasmicElementProxy;

export type PlasmicItem__VariantMembers = {
  checked: "checked";
};
export type PlasmicItem__VariantsArgs = {
  checked?: SingleBooleanChoiceArg<"checked">;
};
type VariantPropType = keyof PlasmicItem__VariantsArgs;
export const PlasmicItem__VariantProps = new Array<VariantPropType>("checked");

export type PlasmicItem__ArgsType = {
  onItemClick?: (event: any) => void;
  completed?: boolean;
  onCompletedChange?: (val: string) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicItem__ArgsType;
export const PlasmicItem__ArgProps = new Array<ArgPropType>(
  "onItemClick",
  "completed",
  "onCompletedChange",
  "title",
  "onTitleChange"
);

export type PlasmicItem__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
  textarea?: p.Flex<"textarea">;
};

export interface DefaultItemProps {
  onItemClick?: (event: any) => void;
  completed?: boolean;
  onCompletedChange?: (val: string) => void;
  title?: string;
  onTitleChange?: (val: string) => void;
  checked?: SingleBooleanChoiceArg<"checked">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicItem__RenderFunc(props: {
  variants: PlasmicItem__VariantsArgs;
  args: PlasmicItem__ArgsType;
  overrides: PlasmicItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "checked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.completed;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.checked
      },
      {
        path: "completed",
        type: "writable",
        variableType: "boolean",

        valueProp: "completed",
        onChangeProp: "onCompletedChange"
      },
      {
        path: "title",
        type: "writable",
        variableType: "text",

        valueProp: "title",
        onChangeProp: "onTitleChange"
      },
      {
        path: "textarea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "This is a text area."
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        PlasmicIconType={
          hasVariant($state, "checked", "checked")
            ? SquareCheckFilledsvgIcon
            : SquaresvgIcon
        }
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgchecked]: hasVariant($state, "checked", "checked")
        })}
        onClick={args.onItemClick}
        role={"img"}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          {(() => {
            try {
              return $state.title;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
      <textarea
        data-plasmic-name={"textarea"}
        data-plasmic-override={overrides.textarea}
        className={classNames(
          projectcss.all,
          projectcss.textarea,
          sty.textarea
        )}
        onChange={e => {
          p.generateStateOnChangeProp($state, ["textarea", "value"])(
            e.target.value
          );
        }}
        ref={ref => {
          $refs["textarea"] = ref;
        }}
        value={p.generateStateValueProp($state, ["textarea", "value"]) ?? ""}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "text", "textarea"],
  svg: ["svg"],
  text: ["text"],
  textarea: ["textarea"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  text: "div";
  textarea: "textarea";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicItem__VariantsArgs;
    args?: PlasmicItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicItem__ArgProps,
          internalVariantPropNames: PlasmicItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicItem";
  } else {
    func.displayName = `PlasmicItem.${nodeName}`;
  }
  return func;
}

export const PlasmicItem = Object.assign(
  // Top-level PlasmicItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    textarea: makeNodeComponent("textarea"),

    // Metadata about props expected for PlasmicItem
    internalVariantProps: PlasmicItem__VariantProps,
    internalArgProps: PlasmicItem__ArgProps
  }
);

export default PlasmicItem;
/* prettier-ignore-end */
