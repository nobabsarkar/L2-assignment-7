"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const DialogPage = () => {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button className="cursor-pointer">Assign Service Worker</Button>
          }
        />

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="py-3 text-center">
              Assign Service Worker
            </DialogTitle>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label>Select Service Worker</Label>

              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Choose a service worker" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="worker-1">Service Worker 01</SelectItem>
                  <SelectItem value="worker-2">Service Worker 02</SelectItem>
                  <SelectItem value="worker-3">Service Worker 03</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label>Select Complaint Category</Label>

              <Select>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="road">Road Maintenance</SelectItem>
                  <SelectItem value="lighting">Street Lighting</SelectItem>
                  <SelectItem value="water">Water Supply</SelectItem>
                  <SelectItem value="drainage">Drainage</SelectItem>
                  <SelectItem value="waste">Waste Management</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose
              render={
                <Button className="cursor-pointer" variant="outline">
                  Cancel
                </Button>
              }
            />

            <Button className="cursor-pointer" type="submit">
              Assign
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default DialogPage;
