"use client";
import React, { useState, useEffect } from "react";
import {
  useForm,
  type Resolver,
  Controller,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StartupSchema } from "@/schemas/StartupSchema";
import { z } from "zod";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import slugify from "slugify";

type FormValues = z.infer<typeof StartupSchema>;

const steps = ["Basic Info", "Team", "Funding", "Media", "Pitch"];

// Map each step to its relevant field names
const stepFieldsMap: Array<Array<keyof FormValues>> = [
  ["companyName", "description", "stage"],
  ["teamSize", "location", "founded", "founders"],
  ["fundingGoal", "fundingRaised"],
  ["logo", "images"],
  ["pitch"],
];

const LOCAL_STORAGE_KEY = "pitchforge-startupFormData";

const StartupForm = () => {
  const [step, setStep] = useState(0);
  const { register, handleSubmit, formState, trigger, control, watch, reset } =
    useForm<FormValues>({
      resolver: zodResolver(StartupSchema) as unknown as Resolver<FormValues>,
    });

  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      reset(JSON.parse(saved));
    }
  }, [reset]);

  const { fields, append, remove } = useFieldArray<FormValues, "founders">({
    control,
    name: "founders",
  });
  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray<FormValues, "images">({
    control,
    name: "images",
  });

  // const stepFields = stepFieldsMap[step] ?? [];

  const nextStep = async () => {
    const valid = await trigger(stepFieldsMap[step]);
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    // Generate slug from companyName
    const slug = slugify(data.companyName, { lower: true, strict: true });
    const payload = { ...data, slug: { current: slug } };

    const response = await fetch("/api/createStartup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (response.ok && result.slug && result.slug.current) {
      router.push(`/startup/${result.slug.current}`);
    } else {
      alert("Error: " + (result.error || "Missing slug in response"));
      console.error("Error creating startup:", result.error || result);
    }
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
                Founders
              </label>
              {/* Dynamic founders array */}
              {fields.map((field, idx) => (
                <div
                  key={field.id}
                  className="mb-4 p-4 rounded-xl bg-gray-50 border border-pitchforge-mint/10"
                >
                  <input
                    {...register(`founders.${idx}.name`)}
                    placeholder="Name"
                    className="mb-2 w-full p-2 rounded-lg border border-pitchforge-mint/30"
                  />
                  {formState.errors.founders?.[idx]?.name && (
                    <span className="text-red-500 text-xs block">
                      {formState.errors.founders[idx].name.message}
                    </span>
                  )}
                  <input
                    {...register(`founders.${idx}.role`)}
                    placeholder="Role"
                    className="mb-2 w-full p-2 rounded-lg border border-pitchforge-mint/30"
                  />
                  {formState.errors.founders?.[idx]?.role && (
                    <span className="text-red-500 text-xs block">
                      {formState.errors.founders[idx].role.message}
                    </span>
                  )}
                  <input
                    {...register(`founders.${idx}.avatar`)}
                    placeholder="Avatar URL"
                    className="mb-2 w-full p-2 rounded-lg border border-pitchforge-mint/30"
                  />
                  {formState.errors.founders?.[idx]?.avatar && (
                    <span className="text-red-500 text-xs block">
                      {formState.errors.founders[idx].avatar.message}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => remove(idx)}
                    className="text-xs text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => append({ name: "", role: "", avatar: "" })}
                className="px-4 py-2 rounded-lg bg-pitchforge-mint text-pitchforge-text font-semibold mt-2"
              >
                Add Founder
              </button>
              {formState.errors.founders &&
                typeof formState.errors.founders.message === "string" && (
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
                Images
              </label>
              {/* Dynamic images array */}
              {imageFields.map((field, idx) => (
                <div
                  key={field.id}
                  className="mb-4 p-4 rounded-xl bg-gray-50 border border-pitchforge-mint/10"
                >
                  <input
                    {...register(`images.${idx}`)}
                    placeholder="Image URL"
                    className="mb-2 w-full p-2 rounded-lg border border-pitchforge-mint/30"
                  />
                  {formState.errors.images?.[idx] && (
                    <span className="text-red-500 text-xs block">
                      {formState.errors.images[idx].message}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="text-xs text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendImage("")}
                className="px-4 py-2 rounded-lg bg-pitchforge-mint text-pitchforge-text font-semibold mt-2"
              >
                Add Image
              </button>
              {formState.errors.images &&
                typeof formState.errors.images.message === "string" && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {formState.errors.images.message}
                  </span>
                )}
            </div>
          </>
        )}
        {step === 4 && (
          <>
            {/* Pitch */}
            <div>
              <label className="block font-semibold mb-2 text-pitchforge-text">
                Pitch (markdown)
              </label>
              <Controller
                name="pitch"
                control={control}
                render={({ field }) => (
                  <MDEditor
                    value={field.value}
                    onChange={field.onChange}
                    preview="edit"
                    height={250}
                    className="bg-white rounded-xl border border-pitchforge-mint/30 shadow-sm"
                  />
                )}
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
