"use client";
import React, { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StartupSchema } from "@/schemas/StartupSchema";
import { z } from "zod";

type FormValues = z.infer<typeof StartupSchema>;

const steps = ["Basic Info", "Team", "Funding", "Media", "Pitch"];

// Map each step to its relevant field names
const stepFieldsMap: Array<Array<keyof FormValues>> = [
  ["companyName", "tagline", "description", "stage"],
  ["teamSize", "location", "founded", "founders"],
  ["fundingGoal", "fundingRaised"],
  ["logo", "images"],
  ["tags", "pitch"],
];

const StartupForm = () => {
  const [step, setStep] = useState(0);
  const { register, handleSubmit, formState, trigger } = useForm<FormValues>({
    resolver: zodResolver(StartupSchema) as unknown as Resolver<FormValues>,
  });

  // const stepFields = stepFieldsMap[step] ?? [];

  const nextStep = async () => {
    const valid = await trigger(stepFieldsMap[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data: FormValues) => {
    alert("Submitted!" + JSON.stringify(data, null, 2));

    console.log(data);
  };

  return (
    <form
      className="max-w-2xl mx-auto bg-white/80 p-8 rounded-3xl shadow-2xl my-10 space-y-8 border border-pitchforge-mint/30"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Stepper */}
      <div className="flex justify-between mb-10">
        {steps.map((label, idx) => (
          <div key={label} className="flex-1 flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 shadow-md
                ${
                  step === idx
                    ? "bg-gradient-to-tr from-pitchforge-mint to-pitchforge-gold text-pitchforge-text border-pitchforge-mint scale-110"
                    : step > idx
                      ? "bg-pitchforge-gold text-white border-pitchforge-gold"
                      : "bg-gray-100 text-gray-400 border-gray-200"
                }
              `}
            >
              {idx + 1}
            </div>
            <span className="mt-2 text-xs font-semibold text-pitchforge-text/70 text-center tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="space-y-6">
        {step === 0 && (
          <>
            {/* Basic Info */}
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Company Name
              </label>
              <input
                type="text"
                {...register("companyName")}
                placeholder="e.g. PitchForge Inc."
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.companyName && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.companyName.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Tagline
              </label>
              <input
                type="text"
                {...register("tagline")}
                placeholder="e.g. The fastest way to pitch your startup"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.tagline && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.tagline.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={4}
                placeholder="Describe your startup, mission, and vision..."
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.description && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.description.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Stage
              </label>
              <input
                type="text"
                {...register("stage")}
                placeholder="e.g. Seed, Series A, MVP, Idea"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.stage && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.stage.message}
                </span>
              )}
            </div>
          </>
        )}
        {step === 1 && (
          <>
            {/* Team */}
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Team Size
              </label>
              <input
                type="number"
                {...register("teamSize")}
                placeholder="e.g. 5"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.teamSize && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.teamSize.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Location
              </label>
              <input
                type="text"
                {...register("location")}
                placeholder="e.g. San Francisco, CA"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.location && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.location.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Founded
              </label>
              <input
                type="text"
                {...register("founded")}
                placeholder="e.g. 2023"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.founded && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.founded.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Founders (comma separated names)
              </label>
              <input
                type="text"
                {...register("founders")}
                placeholder="e.g. Jane Doe, John Smith"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.founders && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.founders.message}
                </span>
              )}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            {/* Funding */}
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Funding Goal
              </label>
              <input
                type="number"
                {...register("fundingGoal")}
                placeholder="e.g. 1000000"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.fundingGoal && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.fundingGoal.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Funding Raised
              </label>
              <input
                type="number"
                {...register("fundingRaised")}
                placeholder="e.g. 250000"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.fundingRaised && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.fundingRaised.message}
                </span>
              )}
            </div>
          </>
        )}
        {step === 3 && (
          <>
            {/* Media */}
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Logo URL
              </label>
              <input
                type="url"
                {...register("logo")}
                placeholder="e.g. https://yourdomain.com/logo.png"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.logo && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.logo.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Images URLs (comma separated)
              </label>
              <input
                type="text"
                {...register("images")}
                placeholder="e.g. https://img1.jpg, https://img2.jpg"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.images && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.images.message}
                </span>
              )}
            </div>
          </>
        )}
        {step === 4 && (
          <>
            {/* Pitch & Tags */}
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Tags (comma separated)
              </label>
              <input
                type="text"
                {...register("tags")}
                placeholder="e.g. SaaS, AI, Fintech"
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.tags && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.tags.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Pitch (markdown)
              </label>
              <textarea
                {...register("pitch")}
                rows={4}
                placeholder="Write your pitch in markdown..."
                className="w-full p-3 rounded-xl border border-pitchforge-mint/30 focus:border-pitchforge-mint focus:ring-2 focus:ring-pitchforge-mint/30 transition outline-none bg-white/90 shadow-sm"
              />
              {formState.errors.pitch && (
                <span className="text-red-500 text-xs mt-1 block">
                  {formState.errors.pitch.message}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10 gap-4">
        <button
          type="button"
          onClick={prevStep}
          disabled={step === 0}
          className="px-7 py-2 rounded-xl bg-gray-100 text-gray-500 font-semibold disabled:opacity-50 shadow-sm hover:bg-gray-200 transition"
        >
          Back
        </button>
        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            className="px-7 py-2 rounded-xl bg-gradient-to-tr from-pitchforge-mint to-pitchforge-gold text-pitchforge-text font-semibold shadow-md hover:scale-105 transition"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-7 py-2 rounded-xl bg-gradient-to-tr from-pitchforge-mint to-pitchforge-gold text-pitchforge-text font-semibold shadow-md hover:scale-105 transition"
          >
            Submit Startup
          </button>
        )}
      </div>
    </form>
  );
};

export default StartupForm;
