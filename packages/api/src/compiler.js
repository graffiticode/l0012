// SPDX-License-Identifier: MIT
/* Copyright (c) 2023, ARTCOMPILER INC */
import {
  Checker as BasisChecker,
  Transformer as BasisTransformer,
  Compiler as BasisCompiler
} from '@graffiticode/basis';

export class Checker extends BasisChecker {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
}

export class Transformer extends BasisTransformer {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const data = options?.data || {};
      const err = [];
      const val = {
        ...data,
        hello: data.hello !== undefined ? data.hello : v0,
      };
      resume(err, val);
    });
  }

  IMAGE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const data = options?.data || {};
      const err = [];
      const val = {
        image: v0,
        ...data,
      };
      resume(err, val);
    });
  }

  THEME(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const data = options?.data || {};
        const err = [];
        // The themed body is spread when it is a record; a non-record body
        // (e.g. a bare string) is boxed under `value` so it can coexist with
        // `theme`. State `data` is merged last so a theme toggle overrides
        // the program's theme.
        const isRecord = typeof v1 === "object" && v1 !== null && !Array.isArray(v1);
        const body = isRecord ? v1 : { value: v1 };
        const val = {
          ...body,
          theme: v0,
          ...data,
        };
        resume(err, val);
      });
    });
  }

  PROG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const data = options?.data || {};
      const err = e0;
      const val = v0.pop();
      resume(err, {
        ...val,
        ...data,
      });
    });
  }
}

export const compiler = new BasisCompiler({
  langID: '0012',
  version: 'v0.0.1',
  Checker: Checker,
  Transformer: Transformer,
});
