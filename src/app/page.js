"use client";
import CompanyLogo from "@/assets/Placeholder-Company-Logos.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {
  return (
    <main className="px-6 md:px-[118px]">
      <h2 className="text-[#17171F] text-4xl font-semibold mb-8">Settings</h2>
      <Tabs defaultValue="company-info" className="w-full">
        <TabsList>
          <TabsTrigger value="your-profile">Your Profile</TabsTrigger>
          <TabsTrigger value="company-info">Company Info</TabsTrigger>
          <TabsTrigger value="manage-seats">Manage Seats</TabsTrigger>
        </TabsList>
        <TabsContent value="your-profile">Your Profile</TabsContent>
        <TabsContent value="company-info">
          <CompanyInfoForm />
        </TabsContent>
        <TabsContent value="manage-seats">Manage seats</TabsContent>
      </Tabs>
    </main>
  );
}

const CompanyInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form className="w-full mt-8 md:mt-14" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:justify-between md:items-start w-full">
        <div className="flex items-center gap-x-8 justify-center">
          <Image
            src={CompanyLogo}
            alt="Company Logo"
            loading="eager" //This is for better lighthouse performance score
          />
          <div>
            <div className="flex items-center gap-x-3">
              <Button variant="destructive" aria-label="remove company logo">
                Remove
              </Button>
              <Button variant="outline" aria-label="change company logo">
                Change Photo
              </Button>
            </div>
            <p className="text-sm text-[#17171F66]">
              or drag and drop (SVG, PNG, JPG)
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end gap-x-3 order-first mb-7 md:mb-0 md:order-last">
          <Button variant="outline" aria-label="cancel">
            Cancel
          </Button>
          <Button aria-label="save changes" type="submit">
            Save changes
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-12">
        {/* Input Group */}
        {/* Company Name */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="company-name" className="text-[#17171FCC]">
            Company's Name
          </Label>
          <Input
            type="text"
            id="company-name"
            {...register("company_name", {
              required: "This field is required",
            })}
          />
          {errors.company_name && (
            <p className="text-red-600">{errors.company_name.message}</p>
          )}
        </div>
        {/* Input Group */}
        {/* Company's Website */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="company-website" className="text-[#17171FCC]">
            Company's Website
          </Label>
          <Input
            type="text"
            id="company-website"
            {...register("company_website", {
              required: "This field is required",
            })}
          />
          {errors.company_website && (
            <p className="text-red-600">{errors.company_website.message}</p>
          )}
        </div>
        {/* Input Group */}
        {/* Company's LinkedIn */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="company-linkedin" className="text-[#17171FCC]">
            Company's Linkedin
          </Label>
          <Input
            type="text"
            id="company-linkedin"
            placeholder=""
            {...register("company_linkedin", {
              required: "This field is required",
            })}
          />
          {errors.company_linkedin && (
            <p className="text-red-600">{errors.company_linkedin.message}</p>
          )}
        </div>
        {/* Input Group */}
        {/* Company's Industry */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="company-industry" className="text-[#17171FCC]">
            Company's Industry
          </Label>
          <Input
            type="text"
            id="company-industry"
            placeholder=""
            {...register("company_industry", {
              required: "This field is required",
            })}
          />
          {errors.company_industry && (
            <p className="text-red-600">{errors.company_industry.message}</p>
          )}
        </div>
      </div>
      {/* Input Group */}
      {/* Employee count */}
      <div className="grid w-full items-center gap-1.5 mt-6">
        <Label htmlFor="employee-count" className="text-[#17171FCC]">
          Employee Count
        </Label>
        <div className="flex items-center gap-x-3 flex-wrap gap-y-2">
          <div className="py-2 px-3 border max-w-fit rounded-full bg-black text-white cursor-pointer">
            1-10
          </div>
          <div className="py-2 px-3 border max-w-fit rounded-full cursor-pointer">
            10-100
          </div>
          <div className="py-2 px-3 border max-w-fit rounded-full cursor-pointer">
            100-500
          </div>
          <div className="py-2 px-3 border max-w-fit rounded-full cursor-pointer">
            1000+
          </div>
        </div>
      </div>
      {/* Input Group */}
      {/* Company's description */}
      <div className="grid w-full items-center gap-1.5 mt-6">
        <Label htmlFor="company-description" className="text-[#17171FCC]">
          Company's description
        </Label>
        <Input
          type="text"
          id="company-description"
          placeholder=""
          {...register("company_description", {
            required: "This field is required",
          })}
        />
        <p className="text-sm font-medium text-[#17171F99]">
          Your detailed company description
        </p>
        {errors.company_description && (
          <p className="text-red-600">{errors.company_description.message}</p>
        )}
      </div>
      {/* Input Group */}
      {/* Company Goals */}
      <div className="grid w-full items-center gap-1.5 mt-6">
        <Label htmlFor="company-goals" className="text-[#17171FCC]">
          What are your company goals?
        </Label>
        <Input
          type="text"
          id="company-goals"
          placeholder=""
          {...register("company_goals", {
            required: "This field is required",
          })}
        />
        {errors.company_goals && (
          <p className="text-red-600">{errors.company_goals.message}</p>
        )}
      </div>
      {/* Input Group */}
      {/* Headquarters */}
      <div className="grid w-full items-center gap-1.5 mt-6">
        <Label htmlFor="headquarters" className="text-[#17171FCC]">
          Headquarters
        </Label>
        <Input
          type="text"
          id="headquarters"
          placeholder=""
          {...register("headquarters", {
            required: "This field is required",
          })}
        />
        {errors.headquarters && (
          <p className="text-red-600">{errors.headquarters.message}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-6">
        {/* Input Group */}
        {/* Funding Round */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="funding-round" className="text-[#17171FCC]">
            Funding Round
          </Label>
          <Select
            {...register("funding_round", {
              required: "This field is required",
            })}
          >
            <SelectTrigger className="w-full" aria-label="select funding round">
              <SelectValue placeholder="Seed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seed">Seed</SelectItem>
              <SelectItem value="otherA">Other A</SelectItem>
              <SelectItem value="otherB">Other B</SelectItem>
            </SelectContent>
          </Select>
          {errors.funding_round && (
            <p className="text-red-600">{errors.funding_round.message}</p>
          )}
        </div>
        {/* Input Group */}
        {/* FAQs */}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="FAQs" className="text-[#17171FCC]">
            FAQs
          </Label>
          <Input
            type="text"
            id="FAQs"
            placeholder=""
            {...register("faqs", {
              required: "This field is required",
            })}
          />
          {errors.faqs && <p className="text-red-600">{errors.faqs.message}</p>}
        </div>
      </div>
    </form>
  );
};
