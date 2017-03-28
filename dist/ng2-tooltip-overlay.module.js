"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var ng2_overlay_1 = require("ng2-overlay");
var ng2_tooltip_component_1 = require("./ng2-tooltip-component");
var Ng2TooltipOverlayModule = (function () {
    function Ng2TooltipOverlayModule() {
    }
    return Ng2TooltipOverlayModule;
}());
Ng2TooltipOverlayModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, ng2_overlay_1.Ng2OverlayModule],
        declarations: [ng2_tooltip_component_1.Ng2TooltipComponent],
        exports: [ng2_tooltip_component_1.Ng2TooltipComponent]
    })
], Ng2TooltipOverlayModule);
exports.Ng2TooltipOverlayModule = Ng2TooltipOverlayModule;
//# sourceMappingURL=ng2-tooltip-overlay.module.js.map